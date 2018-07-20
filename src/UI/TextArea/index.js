import React from 'react';
import TextAreaStyles from './TextArea.styles'




const FormField = (props) => {
    
    let label = props.label || null
    let onChange = props.onChange || null
    let type = props.type || null
    let autoFocus = props.autoFocus || null
    let name = props.name || null
    let optional = props.optional ? ' (optional)' : null



    return (
        <React.Fragment>
            <TextAreaStyles.Label >{label}<span>{optional}</span></TextAreaStyles.Label>
            <TextAreaStyles.Input autoComplete='nope' placeholder={props.placeholder} onChange={onChange} type={type} autoFocus={autoFocus} name={name} />
        </React.Fragment>
    )
}


export default FormField;