import React, { ReactNode, useState, useMemo } from "react";
import { NumericInput } from "@blueprintjs/core";

export interface INumberInputProps extends BaseComponent {
	label: string;
	defaultValue: string;
}

export const NumberInput: ReactNode = (props: INumberInputProps) => {
	const [value, setValue] = useState<number>(props.defaultValue ? props.defaultValue : props.value);

	const onValueChange = (valueAsNumber: number, valueAsString: string, inputElement: HTMLInputElement | null): void => {
		setValue(valueAsNumber);
	};

	const onValueChangeRemote = useMemo(() => {
		setValue(value);
	}, [value]);

	return <NumericInput value={value} placeholder={props.label} onValueChange={onValueChange} />;
};
