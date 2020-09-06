/** @format */
import React from "react";
import setValueByModel from "../util/setValueByModel";
import triggerRecursion from "./triggerRecursion";
import getLeaves from "./getLeaves";

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
  value?: any;
  setPath?: any;
}

export default class Core extends React.PureComponent<CoreProps> {
  componentDidMount() {
    this.setState(this.result);

    this.props.onChange && this.props.onChange(this.result);
  }

  result: any = this.props.value || {};

  setValue = (val: any, path: string) => {
    this.setState(
      (data) => setValueByModel(data, path, val),
      () => this.props.onChange(this.state),
    );
  };

  recursionMain: RecursionMain = (obj, path, level, result) => {
    level++;
    return obj.map((item) => {
      const realpath = getRealPath(path, level, item.name);
      if (Array.isArray(item.children)) {
        return triggerRecursion(
          item,
          this.recursionMain,
          realpath,
          level,
          result,
          this.props.setPath,
        );
      } else {
        return getLeaves.call(this, item, realpath, result);
      }
    });
  };
  render() {
    const { dictionary } = this.props;
    return <>{this.recursionMain(dictionary, "", 0, this.result)}</>;
  }
}
