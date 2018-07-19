import React from 'react';
import FormStyles from './Form.styles'





const Form = (props) => {
    const { onSubmit, title, id } = props

    return(
        <React.Fragment>
            <FormStyles.FormBody id={id} onSubmit={onSubmit}>
                <FormStyles.FormTitle>{title}</FormStyles.FormTitle>
                { props.children }
                {/* <FormStyles.ErrorMessage>{formError}</FormStyles.ErrorMessage> */}
                <div >
                    
                  
                </div>
                    
            </FormStyles.FormBody>
        </React.Fragment>
    )
}


export default Form;