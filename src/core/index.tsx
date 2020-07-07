/** @format */
import ComponentMaps from "./componentRegister";
import React from "react";
import { RecursionMain } from "../@types/core";
import Field from "../component/common/Field";
import Fieldset from "../component/common/Fieldset";
import getNearestNest from "../util/getNearestNest";
import setValueByModel from "../util/setValueByModel";

/**
 * When dictionary children is array,use it
 * @param obj sub form dictionary
 */
const getWapper = (obj: IDictionary): any => {
	const Wapper = ComponentMaps.getMap(obj.type);
	return Wapper;
};

/**
 * Getting real path of current node
 * @param path A absoulte path from current recursion stack without model;
 * @param level recursion level
 * @param model model (sub dictionary name)
 */
const getRealPath = (path: string, level: number, model: string) => {
	const pathArr = path.split(".");
	let result = "";
	if (pathArr.length - 1 === level) {
		pathArr[pathArr.length - 1] = model;
	} else {
		pathArr.push(model);
	}
	result = pathArr.join(".");
	return result;
};

interface CoreProps {
	getDataTime?: "change" | "blur"; //Getting updated data when time equal the value
	dictionary: IDictionary[]; // Form dictionary
	onChange?: any; //custom event
}

const getRealValue = (value: string) => {};

export default class Core extends React.PureComponent<CoreProps> {
	componentDidMount() {
		// const { dictionary } = this.props;
		// console.log(this.result);
		this.props.onChange(this.result);
	}
	// componentDidUpdate(prevStat: any) {
	// 	console.log(prevStat);
	// }
	result: any = {};
	/**
	 * When dictionary children isn't array,use it
	 * @param obj sub form dictionary
	 * @param path A absoulte path from current recursion stack without model;
	 * @param value form item value
	 */
	getLeaves = (obj: IDictionary, path: string, value: any, result: any) => {
		const Leaves: any = ComponentMaps.getMap(obj.type);
		const index = getNearestNest(path);
		const label = Array.isArray(obj.label) ? obj.label[index] : obj.label;
		const defaultValue = Array.isArray(obj.defaultValue) ? obj.defaultValue[index] : obj.label;
		result[obj.name] = defaultValue;
		// this.setValue(obj.defaultValue,path);
		return (
			<Field key={path} {...obj.props} setValue={(val: any) => this.setValue(val, path)} label={label} model={obj.name} absolutePath={path} value={value || defaultValue}>
				<Leaves />
			</Field>
		);
	};

	setValue = (val: any, path: string) => {
		this.setState(
			(data) => setValueByModel(this.state || this.result, path, val),
			() => this.props.onChange(this.state)
		);
	};

	/**
	 * Resolving soulation that current nested is ture before trigger recursion main methode
	 * @param obj sub form dictionary
	 * @param recursionMain main method of generate form
	 * @param path A absoulte path from current recursion stack without model;
	 * @param level recursion level
	 */
	triggerRecusion = (obj: IDictionary, recursionMain: RecursionMain, path: string, level: number, result: any) => {
		const model = obj.name;
		const Wapper = getWapper(obj);
		const children = obj.children || [];
		if (obj.nested && !Number.isNaN(obj.nested)) {
			return Array(obj.nested)
				.fill(0)
				.map((item, index) => {
					if (!Array.isArray(result[obj.name])) {
						result[obj.name] = [{}];
					} else {
						if (!result[obj.name][index]) {
							result[obj.name][index] = {};
						}
					}
					return (
						<Fieldset model={model} key={index} absolutePath={`${path}[${index}]`}>
							<Wapper>{recursionMain(children, `${path}[${index}]`, level, result[obj.name][index] || {})}</Wapper>
						</Fieldset>
					);
				});
		} else {
			result[obj.name] = {};
			return (
				<Fieldset model={model} absolutePath={`${path}`} key={path}>
					<Wapper>{recursionMain(children, `${path}`, level, result[obj.name])}</Wapper>
				</Fieldset>
			);
		}
	};
	recursionMain: RecursionMain = (obj, path, level, result) => {
		level++;
		return obj.map((item, index) => {
			const realpath = getRealPath(path, level, item.name);
			if (Array.isArray(item.children)) {
				return this.triggerRecusion(item, this.recursionMain, realpath, level, result);
			} else {
				return this.getLeaves(item, realpath, "", result);
			}
		});
	};
	render() {
		const { dictionary } = this.props;
		return <>{this.recursionMain(dictionary, "", 0, this.result)}</>;
	}
}
