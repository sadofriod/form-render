/** @format */

import React, { memo } from "react";
import { TextArea as BTextArea } from "@blueprintjs/core";

interface Props extends BaseComponent { }

const TextArea: React.FC<Props> = (props) => {
    const { value, label, onChange } = props;

    return (
        <>
            <div>{label}</div>
            <BTextArea
                onChange={(val: any) => onChange(val.target.value)}
                value={value} />
        </>
    );
};

export default memo(TextArea);
