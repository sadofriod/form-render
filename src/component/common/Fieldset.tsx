/** @format */

import React from "react";

interface Props extends FormField, BaseComponent {
	setValue?: any;
	children?: React.ReactElement | React.ReactElement[];
}

const Fieldset: any = (props: Props) => {
	const { model, absolutePath, children, setValue, label, fieldProps } = props;
	const element = children as React.ReactElement;
	return !Array.isArray(element)
		? React.createElement(element.type, {
				onChange: setValue,
				children: element.props.children,
				label: label,
				path: absolutePath,
				model: model,
				...(fieldProps ? fieldProps.mapProps : {}),
		  })
		: element.map((item, index) =>
				React.createElement(item.type, {
					onChange: setValue,
					key: index,
					children: item.props.children,
					label: label,
					path: absolutePath,
					model: model,
					...(fieldProps ? fieldProps.mapProps : {}),
				})
		  );
};

export default Fieldset;
