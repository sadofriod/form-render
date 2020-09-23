import React from "react";
import { Button, Collapse } from "@blueprintjs/core";
import "./style.css";

const componentList: { [key: string]: string[] } = {
	normal: ["Text", "Select", "Radio"],
	parent: ["Default", "RadioGroup"],
};

type EditorListType = React.SFC<{
	setDic: any;
	createNewFormItem: any;
}>;

const EditorList: EditorListType = (props) => {
	const renderFormItem = (item: string[]) => {
		return item.map((formItemName, index) => {
			return (
				<Button onClick={() => props.createNewFormItem(formItemName)} key={index}>
					{formItemName}
				</Button>
			);
		});
	};
	const formParentNames = Object.keys(componentList);
	return (
		<>
			{formParentNames.map((item) => (
				<div key={item}>
					<h4>{item}</h4>
					<Collapse isOpen={true}>{renderFormItem(componentList[item])}</Collapse>
				</div>
			))}
		</>
	);
};

export default EditorList;
