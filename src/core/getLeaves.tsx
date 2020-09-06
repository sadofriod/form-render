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
 * When dictionary children isn't array,use it
 * @param obj sub form dictionary
 * @param path A absoulte path from current recursion stack without model;
 * @param value form item value
 */
const getLeaves: GetLeaves = function (this, obj, path, result) {
  const Leaves: any = ComponentMaps.getMap(obj.type);
  const index = getNearestNest(path);
  const label = Array.isArray(obj.label) ? obj.label[index] : obj.label;
  const defaultValue = Array.isArray(obj.defaultValue)
    ? obj.defaultValue[index]
    : obj.defaultValue;
  if (!result[obj.name]) result[obj.name] = defaultValue;
  return (
    <Field
      key={path}
      {...obj.props}
      setValue={(val: any) => this.setValue(val, path)}
      label={label}
      model={obj.name}
      absolutePath={path}
      setPath={this.props.setPath}
      value={(this.state && getValueByModel(path, this.state)) || ""}
    >
      <Leaves />
    </Field>
  );
};

export default getLeaves;
