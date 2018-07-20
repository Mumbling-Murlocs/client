import React, { Component, Fragment } from 'react'
import { axiosApi, setJwt } from '../../Api/init'
import decodeJWT from 'jwt-decode'
import Register from './Register'
import Login from './Login'
import store from '../../Redux/store'



class AuthenticationContainer extends Component {

    get storeUser() {
        return JSON.parse(localStorage.user)
    }

    set storeUser(userDetails) {
        localStorage.setItem('user', JSON.stringify(userDetails))
    }

    authenticate = async (e, url) => {
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
            userDetails.token = token

            setJwt({token, userDetails})


            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true
            })

            this.storeUser = userDetails
        } catch (error) {
            store.dispatch({
                type: 'set_loginError',
                loginError: error.message
            })
        }
    }

    expiryCheck = () => {
        const user = this.storeUser
    
        const isExpired = user && (user.exp * 1000) - Date.now()
 

        if (isExpired >= 0) {
            setJwt(user)
            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true
            })
        } else {
            localStorage.removeItem('user')
        }
    }

    componentWillMount() {
        this.expiryCheck()
    }

    signOut = () => {
        axiosApi.get('/users/logout').then(() => {
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
                    {path === '/register' && <Register registerError={loginError} url={path} register={this.authenticate} />}
                    {path === '/login' && <Login loginError={loginError} url={path} login={this.authenticate} />}
            </Fragment>
        )
    }
}

export default AuthenticationContainer