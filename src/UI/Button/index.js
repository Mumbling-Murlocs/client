import React from 'react';
import FormButton from './Button.styles.js'


const Button = (props) => {
    return (
        <React.Fragment>
            <FormButton id="submit">{props.text}</FormButton>
        </React.Fragment>
    )
}

export default Button;