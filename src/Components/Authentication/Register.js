import React, { Fragment } from 'react'
import Form from '../../UI/Form'
import FormField from '../../UI/FormField'
import Button from '../../UI/Button'
import ErrorMessage from '../../UI/ErrorMessage'
import { Link } from 'react-router-dom';


const Register = (props) => {
   // console.log(props)
   const { registerError, register, match} = props

       
       return (
           <Fragment>
           <Form onSubmit={(e) => {register(e, match.url)}} title="Register an account!">
               <FormField label="Email" name="email" type="email" onChange="" />
               <FormField label="Password" name="password" type="password" onChange="" />
               <ErrorMessage loginError={registerError} />
               <Button className="formButton" text="Create account" />
               <Link to="/login">Already have an account?</Link>
           </Form>
       </Fragment>
   )
}

export default Register