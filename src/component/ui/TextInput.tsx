/** @format */

import React, { memo } from "react";
import { InputGroup as Text } from "@blueprintjs/core";

interface Props extends BaseComponent {}

const TextInput: React.SFC<Props> = (props) => {
	const { value, label, onChange } = props;

	return (
		<>
			<div>{label}</div>
			<Text onChange={(val: any) => onChange(val.target.value)} value={value} />
		</>
	);
};

export default memo(TextInput);
