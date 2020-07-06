/** @format */

import React from "react";
import { InputGroup as Text } from "@blueprintjs/core";

interface Props extends BaseComponent {}

const TextInput: React.SFC<Props> = (props) => {
	const { value, label, onChange } = props;
	// console.log(onChange);

	return (
		<>
			<div>{label}</div>
			<Text onChange={(val: any) => onChange(val.target.value)} defaultValue={value} />
		</>
	);
};

export default TextInput;
