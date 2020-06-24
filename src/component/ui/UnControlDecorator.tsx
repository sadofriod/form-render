// import React, { Ref, useState, useEffect, useRef } from "react"

// export interface IUnControlDecoratorProps extends BaseComponent {
//     label: string
//     defaultValue: string
// }

// export const UnControlDecorator: React.FunctionComponent<IUnControlDecoratorProps> = (props) => {
//     const { children, model, absolutePath } = props

//     const [focusRefresh, setFocus] = useState(false)

//     let refs: Array<Ref<BaseComponent>>

//     useEffect(() => {
//         Object.setPrototypeOf(children, refs)
//         refs.push()
//         return () => {
//             refs = []
//         }
//     }, [focusRefresh])

//     return (
//         <>
//             {children}
//         </>
//     )
// }