/** @format */

const testDic: IDictionary[] = [
	{
		name: "name",
		type: "Text",
		label: "form item name",
		defaultValue: "ashes",
	},
	{
		name: "type",
		type: "Text",
		label: "form item component",
		defaultValue: "Text",
		props: {
			mapProps: {
				option: [
					{
						key: 1,
						value: "boy",
					},
					{
						key: 0,
						value: "girl",
					},
				],
			},
		},
	},
	{
		name: "label",
		label: "form item label",
		type: "Text",
		defaultValue: "form item labe",
	},
	{
		name: "defaultValue",
		label: "form item default value",
		type: "Text",
		defaultValue: "test key",
	},
	{
		name: "props",
		label: "form item extra props",
		type: "Text",
	},
];

export default testDic;
