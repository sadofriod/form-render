/** @format */
import { produce } from "immer";
import formatPath from "./formatPath";

const setValueByModel = (obj: any, path: string, value: any) => {
  const realPath = formatPath(path).split(".");
  return produce(obj, (obj: any) => {
    realPath.forEach((item, index) => {
      if (obj && item in obj) {
        if (index === realPath.length - 1) {
          obj = value;
        } else {
          obj = obj[item];
        }
      }
    });
  });
};

export default setValueByModel;
