import React, { Fragment } from 'react'
import Form from '../../UI/Form'
import FormField from '../../UI/FormField'
import Button from '../../UI/Button'
import {StyledLink, ErrorMessage, Center} from './Auth.styles.js'



const Login = (props) => {
    // console.log(props)
    const { loginError, login, url } = props
    const {user} = localStorage

    const localName = user ? `Hello, ${user.email}` : 'Hello Stranger!'

    return (
        <Fragment>
            <Center>
                <Form onSubmit={(e) => login(e, url)} title={localName}>
                    <FormField label="Email" name="email" type="email" onChange="" />
                    <FormField label="Password" name="password" type="password" onChange="" />
                    <ErrorMessage>{loginError}</ErrorMessage>
                    <Button className="formButton" text="Sign In" />
                    <StyledLink to="/register">Need to register a new account?</StyledLink>
                </Form>
            </Center>
        </Fragment>
    )
}

export default Login