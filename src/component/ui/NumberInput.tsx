import React, { memo } from 'react'
import { NumericInput, INumericInputProps, INumericInputState } from '@blueprintjs/core'

interface Props extends BaseComponent { }

const NumberInput: React.FC<Props> = (props) => {
    const { value, onChange, label } = props;

    return (
        <>
            <div>{label}</div>
            <NumericInput
                value={value}
                placeholder={label}
                onValueChange={(val: any) => onChange(val.target.value)}
            />
        </>
    )
}

export default memo(NumberInput)