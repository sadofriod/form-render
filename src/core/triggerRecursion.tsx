/** @format */

import React from "react";
import Fieldset from "../component/common/Fieldset";
import ComponentMaps from "./componentRegister";

/**
 * When dictionary children is array,use it
 * @param obj sub form dictionary
 */
const getWapper = (obj: IDictionary): any => {
  const Wapper = ComponentMaps.getMap(obj.type);
  return Wapper;
};

/**
 * Resolving soulation that current nested is ture before trigger recursion main methode
 * @param obj sub form dictionary
 * @param recursionMain main method of generate form
 * @param path A absoulte path from current recursion stack without model;
 * @param level recursion level
 */
const triggerRecursion = (
  obj: IDictionary,
  recursionMain: RecursionMain,
  path: string,
  level: number,
  result: any,
  setPath: any,
) => {
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
          <Fieldset
            setPath={setPath}
            model={model}
            key={index}
            absolutePath={`${path}[${index}]`}
          >
            <Wapper>
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
    if (!result[obj.name]) {
      result[obj.name] = {};
    }
    return (
      <Fieldset
        model={model}
        setPath={setPath}
        absolutePath={`${path}`}
        key={path}
      >
        <Wapper>
          {recursionMain(children, `${path}`, level, result[obj.name])}
        </Wapper>
      </Fieldset>
    );
  }
};

export default triggerRecursion;
