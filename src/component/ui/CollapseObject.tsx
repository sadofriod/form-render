import React, { useState, Props } from 'react'
import { Collapse, Pre } from '@blueprintjs/core'

export interface ICollapseObjectProps extends BaseComponent {
    label: string
    defaultValue: boolean
}

export const CollapseObject: React.FunctionComponent<ICollapseObjectProps> = (props) => {
    const { children, model, absolutePath } = props

    const [value, setValue] = useState<boolean>(props.defaultValue ? props.defaultValue : props.value)

    return (
        <Collapse isOpen={value}>
            <Pre>
                {children}
            </Pre>
        </Collapse>
    )
}