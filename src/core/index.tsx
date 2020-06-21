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
 * When dictionary children isn't array,use it
 * @param obj sub form dictionary
 * @param path A absoulte path from current recursion stack without model;
 * @param value form item value
 */
const getLeaves = (obj: IDictionary, path: string, value: any) => {
  const Leaves: any = ComponentMaps.getMap(obj.type);
  return (
    <Field model={obj.name} absolutePath={path + "." + obj.name} value={value}>
      <Leaves {...obj.props} />
    </Field>
  );
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

/**
 * Resolving soulation that current nested is ture before trigger recursion main methode
 * @param obj sub form dictionary
 * @param recursionMain main method of generate form
 * @param path A absoulte path from current recursion stack without model;
 * @param level recursion level
 */
const triggerRecusion = (
  obj: IDictionary,
  recursionMain: RecursionMain,
  path: string,
  level: number,
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
      return (
        <Fieldset model={model} absolutePath={`${path}.${item}[${index}]`}>
          <Wapper {...obj.props}>
            {recursionMain(children, `${path}.${item}[${index}]`, level)}
          </Wapper>
        </Fieldset>
      );
    });
  } else {
    return (
      <Fieldset model={model} absolutePath={`${path}.${obj.name}`}>
        <Wapper {...obj.props}>
          {recursionMain(children, `${path}.${obj.name}`, level)}
        </Wapper>
      </Fieldset>
    );
  }
};

// const

interface CoreProps {
  getDataTime: "change" | "blur"; //Getting updated data when time equal the value
  dictionary: IDictionary[]; // Form dictionary
  onChange?: any; //custom event
}

export default class Core extends React.PureComponent<CoreProps> {
  componentDidMount() {}
  recursionMain: RecursionMain = (obj, path, level) => {
    level++;
    return obj.map((item) => {
      const realpath = getRealPath(path, level, item.name);
      if (Array.isArray(item.children)) {
        return triggerRecusion(item, this.recursionMain, realpath, level);
      } else {
        return getLeaves;
      }
    });
  };
  render() {
    return <></>;
  }
}
