import React, { Component, Fragment } from 'react'
import { axiosApi, setJwt } from '../../Api/init'
import decodeJWT from 'jwt-decode'
import Register from './Register'
import Login from './Login'
import CreateCompany from './CreateCompany'
import store from '../../Redux/store'



class AuthenticationContainer extends Component {

    get storeUser() {
        return localStorage.user && JSON.parse(localStorage.user)
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
            const user = token && decodeJWT(token)
            user.token = token

            setJwt(user)


            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true,
                currentUser: user
            })
            this.storeUser = user
            this.props.history.push('/dashboard')
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
                loggedIn: true,
                currentUser: user
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
                loggedIn: false,
                currentUser: null
            })
        })
    }

    createCompany = (e) => {
        e.preventDefault()
        const form = e.target.elements

       const newCompany = {
            name: form.name.value,
            abn: form.abn.value,
            businessType: form.businessType.value,
            address: form.address.value,
            phoneNumber: form.phoneNumber.value,
            accountType: 'purchaser',
            companyOwnerId: store.getState().currentUser.sub
        }

        store.dispatch({
            type: 'company',
            customAction: 'create',
            newCompany: newCompany
        })
        
        this.storeUser = store.getState().currentUser
        this.props.history.push('/dashboard')
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
                    {path === '/create-company' && <CreateCompany createCompany={this.createCompany} />}
            </Fragment>
        )
    }
}

export default AuthenticationContainer