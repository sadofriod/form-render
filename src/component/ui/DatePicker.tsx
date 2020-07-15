/** @format */

import React, { memo } from "react";
import { DatePicker as BDatePicker } from "@blueprintjs/datetime";

interface Props extends BaseComponent {}

const DatePicker: React.FC<Props> = (props) => {
	const { value, label, onChange } = props;

	return (
		<>
			<div>{label}</div>
			<BDatePicker onChange={(val: any) => onChange(val.target.value)} value={value} />
		</>
	);
};

export default memo(DatePicker);
