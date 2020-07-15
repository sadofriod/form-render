/** @format */

import React, { memo } from "react";
import { Collapse, Pre } from "@blueprintjs/core";

interface Props extends BaseComponent { }

const CollapseObject: React.FC<Props> = (props) => {
    const { value, label, onChange, children } = props;

    return (
        <>
            <div>{label}</div>
            <Collapse>
                <Pre>
                    { children }
                </Pre>
            </Collapse>
        </>
    );
};

export default memo(CollapseObject);
