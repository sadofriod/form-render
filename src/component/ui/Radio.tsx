/** @format */

import React, { memo } from "react";
import { Radio as BRadio } from "@blueprintjs/core";

interface Props extends BaseComponent { }

const Radio: React.FC<Props> = (props) => {
    const { value, label, onChange } = props;

    return (
        <>
            <div>{label}</div>
            <BRadio
                onChange={(val: any) => onChange(val.target.value)}
                value={value} />
        </>
    );
};

export default memo(Radio);
