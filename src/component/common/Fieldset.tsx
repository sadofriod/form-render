/** @format */

import React from "react";

interface Props extends BaseComponent {
	setValue?: any;
	children?: React.ReactElement | React.ReactElement[];
}

const Fieldset: any = (props: Props) => {
	const { model, absolutePath, children, setValue, label } = props;
	const element = children as React.ReactElement;
	return !Array.isArray(element)
		? React.createElement(element.type, {
				onChange: setValue,
				children: element.props.children,
				label: label,
				path: absolutePath,
				model: model,
		  })
		: element.map((item, index) =>
				React.createElement(item.type, {
					onChange: setValue,
					key: index,
					children: item.props.children,
					label: label,
					path: absolutePath,
					model: model,
				})
		  );
};

export default Fieldset;
