import React, { Fragment } from 'react'
import Form from '../../../../UI/Form'
import FormField from '../../../../UI/FormField'
import {StyledLink, ErrorMessage, Center, Button} from '../../../Authentication/Auth.styles.js'



const StaffLogin = (props) => {
    // console.log(props)
    const { loginError, login, url } = props
    const {staff} = localStorage

    const localName = staff ? `Hello, ${staff.firstName}` : 'Hello Stranger!'

    return (
        <Fragment>
            <Center>
                <Form onSubmit={(e) => login(e, url)} title={localName}>
                    <FormField label="Email" name="email" type="email" onChange="" />
                    <FormField label="Password" name="password" type="password" onChange="" />
                    <ErrorMessage>{loginError}</ErrorMessage>
                    <Button className="formButton">Sign In</Button>
                </Form>
            </Center>
        </Fragment>
    )
}

export default StaffLogin