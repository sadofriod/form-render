import React, { ReactNode, useState } from 'react'
import { DatePicker as BlDatePicker } from '@blueprintjs/datetime'

export interface IDatePickerProps extends BaseComponent {
    label: string
    defaultValue: string
}

export const DatePicker: ReactNode = (props: IDatePickerProps) => {
    const { model, absolutePath } = props

    const [value, setValue] = useState<Date>(props.defaultValue ? props.defaultValue : props.value)

    const onValueChange = (selectedDate: Date, isUserChange: boolean): void => {
        setValue(selectedDate)
    }

    return (
        <BlDatePicker onChange={onValueChange} />
    )
}