import formatPath from "./formatPath";

let getValueByModel = (path: string, obj: any) => {
	const pathArr = formatPath(path).split(".");
	let result = obj;
	for (let i = 0; i < pathArr.length; i++) {
		let element = pathArr[i];
		if (Array.isArray(result)) {
			result = result[parseInt(element)];
		}
		if (element in result) {
			result = result[element];
		}
	}
	return result;
};

export default getValueByModel;
