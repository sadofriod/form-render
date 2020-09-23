/** @format */

import Field from "../component/common/Field";
import React from "react";
import ComponentMaps from "./componentRegister";
import getNearestNest from "../util/getNearestNest";
import getValueByModel from "../util/getValueByModel";

interface GetLeaves {
	(this: any, obj: IDictionary, path: string, result: any): any;
}

/**
 *  handle label value
 * @param lable dictionary node label
 * @param relativePath dictionary node relative path
 * @param absolutePath dictionary node absolute path that from dictionary toplest
 * @param value
 * @param resultSet
 * @param index
 */
const getRealLabel = (relativePath: string, absolutePath: string, value: any, resultSet: any, index: number, label?: LabelType) => {
	if (typeof label === "function") {
		label(relativePath, absolutePath, value, resultSet);
	} else if (Array.isArray(label)) {
		return label[index];
	} else {
		return label;
	}
};

/**
 * When dictionary children isn't array,use it
 * @param obj sub form dictionary
 * @param path A absoulte path from current recursion stack without model;
 * @param value form item value
 */
const getLeaves: GetLeaves = function (this, obj, path, result) {
	const Leaves: any = ComponentMaps.getMap(obj.type);
	const index = getNearestNest(path);
	const value = (this.state && getValueByModel(path, this.state)) || "";
	const label = getRealLabel(obj.name, path, value, result, index, obj.label);
	const defaultValue = Array.isArray(obj.defaultValue) ? obj.defaultValue[index] : obj.defaultValue;
	if (!result[obj.name]) result[obj.name] = defaultValue;
	return (
		<Field
			key={path}
			{...obj.props}
			setValue={(val: any) => this.setValue(val, path)}
			label={label}
			model={obj.name}
			absolutePath={path}
			value={(this.state && getValueByModel(path, this.state)) || ""}
		>
			<Leaves />
		</Field>
	);
};

export default getLeaves;
