/** @format */
import ComponentMaps from "./componentRegister";
import React from "react";
import { RecursionMain } from "../@types/core";
import Field from "../component/common/Field";
import Fieldset from "../component/common/Fieldset";

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

export default class Core extends React.PureComponent<CoreProps> {
  componentDidMount() {
    // const { dictionary } = this.props;
  }
  result: any = {};
  /**
   * When dictionary children isn't array,use it
   * @param obj sub form dictionary
   * @param path A absoulte path from current recursion stack without model;
   * @param value form item value
   */
  getLeaves = (obj: IDictionary, path: string, value: any, result: any) => {
    const Leaves: any = ComponentMaps.getMap(obj.type);

    result[obj.name] = value;
    return (
      <Field model={obj.name} absolutePath={path} value={value}>
        <Leaves {...obj.props} />
      </Field>
    );
  };
  /**
   * Resolving soulation that current nested is ture before trigger recursion main methode
   * @param obj sub form dictionary
   * @param recursionMain main method of generate form
   * @param path A absoulte path from current recursion stack without model;
   * @param level recursion level
   */
  triggerRecusion = (
    obj: IDictionary,
    recursionMain: RecursionMain,
    path: string,
    level: number,
    result: any,
  ) => {
    const model = obj.name;
    const Wapper = getWapper(obj);
    const children = obj.children || [];
    if (
      obj.nested &&
      Array.isArray(obj.defaultValue) &&
      Array.isArray(obj.label)
    ) {
      return obj.defaultValue.map((item, index) => {
        if (!Array.isArray(result[obj.name])) {
          result[obj.name] = [];
        } else {
          if (!result[obj.name][index]) {
            result[obj.name][index] = {};
          }
        }
        return (
          <Fieldset
            model={model}
            key={index}
            absolutePath={`${path}[${index}]`}
          >
            <Wapper {...obj.props}>
              {recursionMain(
                children,
                `${path}[${index}]`,
                level,
                result[obj.name][index] || {},
              )}
            </Wapper>
          </Fieldset>
        );
      });
    } else {
      // setValue(this.result, path, {});
      result[obj.name] = {};
      return (
        <Fieldset model={model} absolutePath={`${path}`}>
          <Wapper {...obj.props}>
            {recursionMain(children, `${path}`, level, result[obj.name])}
          </Wapper>
        </Fieldset>
      );
    }
  };
  recursionMain: RecursionMain = (obj, path, level, result) => {
    level++;
    return obj.map((item) => {
      const realpath = getRealPath(path, level, item.name);
      if (Array.isArray(item.children)) {
        return this.triggerRecusion(
          item,
          this.recursionMain,
          realpath,
          level,
          result,
        );
      } else {
        return this.getLeaves(item, realpath, "", result);
      }
    });
  };
  render() {
    console.log(this.result);

    const { dictionary } = this.props;
    return <>{this.recursionMain(dictionary, "", 0, this.result)}</>;
  }
}
