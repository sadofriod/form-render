import React, { ReactNode, useState } from 'react'
import { Button } from '@blueprintjs/core'
import { Select as BlSelect, ISelectProps as IBlSelectProps } from '@blueprintjs/select'

/**
 * @param defineValue Render Model
 */
export interface ISelectProps<T> extends BaseComponent {
    items: Array<BaseComponent>
    defineValue: string
    disabled: boolean
}

export const Select: ReactNode = (props: ISelectProps<BaseComponent>) => {
    const { model, absolutePath } = props

    const [item, setItem] = useState()

    const [defineValue, setDinfineValue] = useState(props.defineValue)

    const [isDisable, setDisable] = useState(props.disabled)

    const BlSelectProps: IBlSelectProps<BaseComponent> = {
        items: props.items,
        itemRenderer: () => {
            return null
        },
        onItemSelect: () => {

        }
    }

    return (
        <BlSelect
            {...BlSelectProps}
        >
            <Button
                icon="film"
                rightIcon="caret-down"
                text={item ? defineValue : "(No selection)"}
                disabled={isDisable}
            />
        </BlSelect>
    )
}