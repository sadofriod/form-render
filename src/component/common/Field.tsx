/** @format */

import React from "react";

type UpdateTimer = "change" | "blur" | "focus";

interface Props extends FormField, BaseComponent {
	setValue?: any;
	onChange?: any;
	updateTimer?: UpdateTimer;
}

const Field: React.SFC<Props> = (props) => {
	const { value, absolutePath, children, setValue, label, fieldProps } = props;
	const element = children as React.ReactElement;
	return React.createElement(element.type, {
		value: value,
		onChange: setValue,
		label: label,
		path: absolutePath,
		...(fieldProps ? fieldProps.mapProps : {}),
	});
};

export default Field;
