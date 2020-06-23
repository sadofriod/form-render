import React, { ReactNode, useState } from 'react'
import { Button } from '@blueprintjs/core'
import { Select as BlSelect } from '@blueprintjs/select'

/**
 * @param defineValue Render Model
 */
export interface ISelectProps extends BaseComponent {
    items: ArrayLike<BaseComponent>
    defineValue: string
    disabled: boolean
}

export const Select = (props: ISelectProps) => {

    const [item, setItem] = useState()

    const [defineValue, setDinfineValue] = useState(props.defineValue)

    const [isDisable, setDisable] = useState(props.disabled)

    return (
        <Select
            items={props.items}

        >
            <Button
                icon="film"
                rightIcon="caret-down"
                text={item ? defineValue : "(No selection)"}
                disabled={isDisable}
            />
        </Select>
    )
}