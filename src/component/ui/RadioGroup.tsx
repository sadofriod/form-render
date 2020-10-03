import React, { useState, Props, useMemo } from "react";
import { RadioGroup as BlRadioGroup, IRadioGroupProps as IBlRadioGroupProps } from "@blueprintjs/core";

export interface IRadioGroupProps extends BaseComponent {
	label: string;
	defaultValue: string;
	disabled: boolean;
}

export const RadioGroup: React.FunctionComponent<IRadioGroupProps> = (props) => {
	const { children } = props;

	const [disabled, setDisabled] = useState<boolean>(props.disabled);
	//TODO: Children component type verfiy
	const onDisabledChangeRemote = useMemo(() => {
		setDisabled(disabled);
	}, [disabled]);

	const BlRadioGroupProps: IBlRadioGroupProps = {
		onChange: () => {},
		disabled: disabled,
		options: [],
	};

	return <BlRadioGroup {...BlRadioGroupProps}>{children}</BlRadioGroup>;
};
