import React from 'react';
import Button from './../Button';
import FormStyles from './Form.styles'





const Form = (props) => {
    const { onSubmit, title, loginError } = props

    return(
        <React.Fragment>
            <FormStyles.FormBody onSubmit={onSubmit}>
                <FormStyles.FormTitle>{title}</FormStyles.FormTitle>
                { props.children }
                <FormStyles.ErrorMessage>{loginError}</FormStyles.ErrorMessage>
                <div >
                    
                  
                </div>
                    
            </FormStyles.FormBody>
        </React.Fragment>
    )
}


export default Form;