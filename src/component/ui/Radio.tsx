import React, { ReactNode, useState } from "react";
import { Radio as BlRadio, IRadioProps as IBlRadioProps } from "@blueprintjs/core";

export interface IRadioProps extends BaseComponent {
	label: string;
	defaultValue: string;
}

export const Radio: ReactNode = (props: IRadioProps) => {
	const [value, setValue] = useState<string>(props.defaultValue ? props.defaultValue : props.value);

	return <BlRadio value={value} placeholder={props.label} />;
};
