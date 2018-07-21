import React, { Fragment } from 'react'
import Form from '../../UI/Form'
import FormField from '../../UI/FormField'
import { StyledLink, ErrorMessage, Center, Button } from './Auth.styles.js'



const Register = (props) => {
   const { registerError, register, url} = props

       
       return (
           <Fragment>
               <Center>
                    <Form onSubmit={(e) => register(e, url)} title="Register an account!">
                        <FormField label="Email" name="email" type="email" onChange="" />
                        <FormField label="Password" name="password" type="password" onChange="" />
                        <ErrorMessage>{registerError}</ErrorMessage>

                        <Button>Create account</Button>
                        <StyledLink to="/login">Already have an account?</StyledLink>
                    </Form>
                </Center>
            </Fragment>
   )
}

export default Register