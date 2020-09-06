const setDictionaryByModel = (obj: IDictionary[] | undefined, path: string, value: IDictionary) => {
	const reg = /\[\S\s*\]/g;
	path = path.replace(reg, "");
	const pathArr = path.split(".");
	for (let i = 0; i < pathArr.length - 1; i++) {
		if (obj && !!pathArr[i]) {
			const tempResult: IDictionary | undefined = obj.find((item) => item.name === pathArr[i]);
			obj = tempResult ? tempResult.children : tempResult;
		}
	}
	if (obj) {
		obj.push(value);
	}
	// return obj;
};

export default setDictionaryByModel;
