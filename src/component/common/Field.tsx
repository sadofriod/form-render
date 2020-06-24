/** @format */

import React from "react";

type UpdateTimer = "change" | "blur" | "focus";

interface Props extends BaseComponent {
	setValue?: any;
	onChange?: any;
	updateTimer?: UpdateTimer;
}

const Field: React.SFC<Props> = (props) => {
	const { model, value, absolutePath, updateTimer, children, setValue, onChange } = props;
	const updater = (value: any) => {
		if (onChange) {
			return onChange(value);
		} else {
			return setValue(absolutePath, value);
		}
	};
	const updateTimerMap = (timer?: UpdateTimer) => {
		// const updater = onChange || setValue;
		switch (timer) {
			case "change":
				return { onChange: updater };
			case "blur":
				return { onBlur: updater };
			case "focus":
				return { onFocus: updater };
			default:
				return { onChange: updater };
		}
	};
	const renderChild = () => {
		const child = children as React.ReactElement;
		const updateTimerProps = updateTimerMap(updateTimer);
		return React.createElement(child.type, {
			...updateTimerProps,
			setValue,
			value,
			model,
			absolutePath,
		});
	};
	return <>{renderChild()}</>;
};

export default Field;
