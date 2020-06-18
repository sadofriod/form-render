/** @format */

class FormRenderCore implements IFormRenderCore {
	obj: IDictionary[];
	getNode: (obj: IDictionary, path: string) => any;
	getSubGraph: (obj: IDictionary, path: string) => any;
	constructor(obj: IDictionary[], getNode: (obj: IDictionary, path: string) => any, getSubGraph: (obj: IDictionary, path: string) => any) {
		this.getNode = getNode;
		this.getSubGraph = getSubGraph;
		this.obj = obj;
	}

	/**
	 *
	 * @param obj recursion dictionary
	 * @returns Is need to trigger recusion
	 */
	recusionCondition = (obj: IDictionary) => {
		return obj.children && Array.isArray(obj.children);
	};

	/**
	 * @param obj recursion dictionary
	 * @param path Current level path
	 * @param level Current level
	 */
	getRealPath = (obj: IDictionary, path: string, level: number) => {
		const result: string[] = path.split(".");
		if (level > 0) {
			result.pop();
			return result.join(".");
		}
		return `${path}.${obj.name}`;
	}
	getNodeHOF = (getNode: any, obj: IDictionary, path: string) => {
		return getNode(this.obj, path);
	};
	getSubGraphHOF = (getSubGraph: any, obj: IDictionary[], path: string, level: number) => {
		return getSubGraph(this.obj, path, level);
	};

	/**
	 * The reucrsion main method be use to analyze dictionary
	 * @param path Current level path like "obj.user.name"
	 * @param level Current level
	 * @returns React dom tree
	 */
	recursionMain = (path: string, level: number) => {
		return this.obj.map((item, index) => {
			const realPath = this.getRealPath(item, path, index);
			if (this.recusionCondition(item)) {
				return this.getSubGraphHOF(this.getSubGraph, item.children as IDictionary[], realPath, level);
			} else {
				return this.getNodeHOF(this.getNode, item, realPath);
			}
		});
	};
}

export default FormRenderCore;
