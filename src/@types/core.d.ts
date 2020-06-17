interface getNode {}

declare interface IFormRenderCore {
	obj: IDictionary[];
	getNode: (obj: IDictionary, path: string) => any;
	getSubGraph: (obj: IDictionary, path: string) => any;
	getRealPath: (obj: IDictionary, index: number) => string;
	getNodeHOF: (getNode: any, obj: IDictionary, path: string) => any;
	getSubGraphHOF: (getSubGraph: any, obj: IDictionary[], path: string, level: number) => any;
	recursionMain: (path: string, level: number) => any;
}
