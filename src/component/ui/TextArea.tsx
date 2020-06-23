import React, { ReactNode, useState } from 'react'
import { TextArea as BlTextArea } from '@blueprintjs/core'

export interface ITextAreaProps extends BaseComponent {
    label: string
    defaultValue: string
}

export const TextArea: ReactNode = (props: ITextAreaProps) => {
    const model = props.model
    const absolutePath = props.absolutePath
    const [value, setValue] = useState<string>(props.defaultValue ? props.defaultValue : props.value)

    return (
        <BlTextArea value={value} />
    )
}