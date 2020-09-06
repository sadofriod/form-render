/** @format */

import React from "react";

type UpdateTimer = "change" | "blur" | "focus";

interface Props extends BaseComponent {
	setValue?: any;
	onChange?: any;
	updateTimer?: UpdateTimer;
	setPath?: any;
}

const Field: React.SFC<Props> = (props) => {
	const { model, value, absolutePath, children, setValue, label, setPath } = props;
	const element = children as React.ReactElement;
	return React.createElement(element.type, {
		value: value,
		onChange: setValue,
		label: label,
		setPath: setPath,
		path: absolutePath,
	});
};

export default Field;
