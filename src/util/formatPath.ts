/** @format */

const formatPath = (path: string) => {
  const replaceRegs = [/\[/gi, /]/gi];
  let result = path;
  result = result.replace(replaceRegs[0], ".");
  result = result.replace(replaceRegs[1], "");
  return result;
};
export default formatPath;
