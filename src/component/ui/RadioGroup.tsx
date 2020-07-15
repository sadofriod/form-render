/** @format */

import React, { memo } from "react";
import { RadioGroup as BRadioGroup } from "@blueprintjs/core";

interface Props extends BaseComponent {}

const RadioGroup: React.FC<Props> = (props) => {
	const { label, onChange, children } = props;

	return (
		<>
			<div>{label}</div>
			<BRadioGroup onChange={(val: any) => onChange(val.target.value)}>
                { children }
            </BRadioGroup>
		</>
	);
};

export default memo(RadioGroup);
