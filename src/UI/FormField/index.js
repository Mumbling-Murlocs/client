import React from 'react';
import {Input, Label} from './FormField.styles'




const FormField = (props) => {
    
    let label = props.label || null
    let onChange = props.onChange || null
    let type = props.type || null
    let autoFocus = props.autoFocus || null
    let name = props.name || null
    let step = props.step || null
    let optional = props.optional ? ' (optional)' : null



    return (
        <React.Fragment>
            <Label>{label}<span>{optional}</span></Label>
            <Input step={step} autoComplete='nope' placeholder={props.placeholder} onChange={onChange} type={type} autoFocus={autoFocus} name={name} />
        </React.Fragment>
    )
}


export default FormField;