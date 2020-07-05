/** @format */

import formatPath from "./formatPath";

const getNearestNest = (path: string): number => {
  const realPath = formatPath(path).split(".");
  const reg = /^[0-9]$/;
  let length = realPath.length - 1;
  while (length >= 0) {
    if (reg.test(realPath[length])) {
      return Number(realPath[length]);
    }
    length--;
  }
  return NaN;
};

export default getNearestNest;
