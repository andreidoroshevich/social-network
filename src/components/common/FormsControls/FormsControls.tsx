import React from "react"
import {Field, WrappedFieldProps} from "redux-form";
import s from "./formsControls.module.css"

const FormControl: React.FC<WrappedFieldProps> = ({meta, children}) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div className={hasError ? s.error : ""}>
                {children}
            </div>
            <div className={s.error}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {
    return (
        <FormControl input={input} meta={meta}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {
    return (
        <FormControl input={input} meta={meta}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export const createField = (placeholder: any, name: string, validators: any, component: any, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        />{text}
    </div>
)



