import React, { Component, Fragment } from 'react'
// import Login from './Login'
import Register from './Register'
import Modal from '../../UI/Modal'

class Authentication extends Component {
    render() {
        return(
            <Modal toggleModal={ () => {} }>
                <Register />
            </Modal>
        )
    }
}

export default Authentication