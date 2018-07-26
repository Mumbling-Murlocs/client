import React, { Fragment } from 'react'
import Form from '../../../../UI/Form'
import FormField from '../../../../UI/FormField'
import { StyledLink, ErrorMessage, Center, Button } from '../../../Authentication/Auth.styles.js'



const StaffRegister = (props) => {
   const { registerError, register, url} = props
   

       
       return (
           <Fragment> 
               <Center>
                    <Form onSubmit={(e) => register(e, url)} title="Register an account!">
                        <FormField label="First Name" name="firstName" type="text" />
                        <FormField label="Last Name" name="lastName" type="text" />
                        <FormField label="Email" name="email" type="email" />
                        <FormField label="Password" name="password" type="password" />
                        <ErrorMessage>{registerError}</ErrorMessage>

                        <Button>Create account</Button>
                    </Form>
                </Center>
            </Fragment>
   )
}

export default StaffRegister