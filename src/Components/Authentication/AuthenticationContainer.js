import React, { Component, Fragment } from 'react'
import { axiosApi, setJwt } from '../../Api/init'
import decodeJWT from 'jwt-decode'
import Register from './Register'
import Login from './Login'
import Modal from '../../UI/Modal'
import store from '../../Redux/store'


class AuthenticationContainer extends Component {

    get storeUser() {
        return localStorage.token
    }

    set storeUser(toBeStored) {
        localStorage.setItem('token', toBeStored.token)
        localStorage.setItem('user', toBeStored.userDetails)
    }

    authenticate = async (e, url) => {
        console.log(url)
        try {
            e.preventDefault()
            const form = e.target.elements

            const response = await axiosApi.post(`/users${url}`, {
                email: form.email.value,
                password: form.password.value
            })

            const token = response.data.token
            const userDetails = token && decodeJWT(token)
            // console.log(token)

            setJwt({token, userDetails})


            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true
            })

            this.storeUser = {token, userDetails}
        } catch (error) {
            store.dispatch({
                type: 'set_loginError',
                loginError: error.message
            })
        }
    }

    expiryCheck = () => {
        const isExpired = (localStorage.expiry * 1000) - Date.now()

        if (isExpired >= 0) {
            setJwt(localStorage.token)
            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true
            })
        } else {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    }

    componentWillMount() {
        this.expiryCheck()
    }

    signOut = () => {
        axiosApi.get('/users/logout').then(() => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')

            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: false
            })
        })
    }

    render() {
        // console.log(this.props, 'Hello')
        const {path} = this.props.match 
        const {loginError} = store.getState()
        // console.log(store.getState())
        return(
            <Fragment>
                <Modal toggleModal={ () => {} }>
                    {path === '/register' && <Register registerError={loginError} url={path} register={this.authenticate} />}
                    {path === '/login' && <Login loginError={loginError} url={path} login={this.authenticate} />}
                    
                </Modal>
            </Fragment>
        )
    }
}

export default AuthenticationContainer