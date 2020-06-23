import React, { useState, Props } from 'react'
import { RadioGroup as BlRadioGroup, IRadioGroupProps as IBlRadioGroupProps } from '@blueprintjs/core'

export interface IRadioGroupProps extends BaseComponent {
    label: string
    defaultValue: string
    disabled: boolean
    children: Array<BaseComponent>
}

export const RadioGroup: React.FunctionComponent<IRadioGroupProps> = (props) => {
    const model = props.model

    const absolutePath = props.absolutePath

    const { children } = props

    const [disabled, setDisabled] = useState<boolean>(props.disabled)

    const BlRadioGroupProps: IBlRadioGroupProps = {
        onChange: () => {
            null
        },
        disabled: disabled,
        options: [
            
        ]
    }

    return (
        <BlRadioGroup
            {...BlRadioGroupProps}
        >
            { children }
        </BlRadioGroup>
    )
}