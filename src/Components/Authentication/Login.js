import React, { Fragment } from 'react'
import Form from '../../UI/Form'
import FormField from '../../UI/FormField'
import Button from '../../UI/Button'
import Auth from './Auth.styles.js'



const Login = (props) => {
    // console.log(props)
    const { loginError, login, url } = props
    const {user} = localStorage

    const localName = user ? `Hello, ${user.email}` : 'Hello Stranger!'

    return (
        <Fragment>
            <Form onSubmit={(e) => login(e, url)} title={localName}>
                <FormField label="Email" name="email" type="email" onChange="" />
                <FormField label="Password" name="password" type="password" onChange="" />
                <Auth.ErrorMessage>{loginError}</Auth.ErrorMessage>
                <Button className="formButton" text="Sign In" />
                <Auth.StyledLink to="/register">Need to register a new account?</Auth.StyledLink>
            </Form>
        </Fragment>
    )
}

export default Login