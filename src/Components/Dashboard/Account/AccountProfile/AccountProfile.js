import React from 'react'
import { Body, Title, EditButton } from './AccountProfile.styles'
import store from '../../../../Redux/store'

const MyAccount = (props) => {
    const user = store.getState().currentUser
    // firsName: String,
    //     lastName: String,
    //         role: String,
    //             phoneNumber: String,
    console.log(user)

    return(
        <Body>
            <Title>Hello, {user.firstName + ' ' + user.lastName}</Title>
            <p>{user.role}</p>
            <EditButton>Edit profile</EditButton>
            <Title>Your company details</Title>
            <p>{user.company.name}</p>
            
          
        </Body>
    )
}

export default MyAccount
