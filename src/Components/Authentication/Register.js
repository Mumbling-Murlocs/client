import React, { Fragment } from 'react'
import Form from '../../UI/Form'
import FormField from '../../UI/FormField'
import Button from '../../UI/Button'
import Auth from './Auth.styles.js'



const Register = (props) => {
   // console.log(props)
   const { registerError, register, url} = props

       
       return (
           <Fragment>
               <Form onSubmit={(e) => register(e, url)} title="Register an account!">
                    <FormField label="Email" name="email" type="email" onChange="" />
                    <FormField label="Password" name="password" type="password" onChange="" />
                    <Auth.ErrorMessage>{registerError}</Auth.ErrorMessage>

                    <Button className="formButton" text="Create account" />
                    <Auth.StyledLink to="/login">Already have an account?</Auth.StyledLink>
                </Form>
            </Fragment>
   )
}

export default Register