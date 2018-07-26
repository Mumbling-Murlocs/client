import React from 'react'
import {Body, ErrorMessage, Button} from './NewStaff.styles.js'
import Form from '../../../../UI/Form'
import FormField from '../../../../UI/FormField'
// import { StyledLink, ErrorMessage, Center, Button } from '../../../Authentication/Auth.styles.js'




const NewStaff = (props) => {
    const { registerError, register, url} = props

    console.log('In NewStaff')
    return(
        <Body>
            <div>
                 <Form onSubmit={(e) => register(e, url)} title="Register a new staff member!">
                    <FormField label="First Name" name="firstName" type="text" />
                    <FormField label="Last Name" name="lastName" type="text" />
                    <FormField label="Email" name="email" type="email" />
                    <FormField label="Password" name="password" type="password" />
                    <ErrorMessage>{registerError}</ErrorMessage>

                    <Button>Create account</Button>
                </Form>
            </div>
        </Body>
    )
}


export default NewStaff
