import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import LoginForm from './Components/Authentication/Login'
import RegisterForm from './Components/Authentication/Register'
import TopicsView from './Components/TopicsView'
import AdminPage from './Components/AdminPage'
import {api, setJwt} from './Api/init'
import decodeJWT from 'jwt-decode'
import { isTeacher, isOwner, isAdmin } from './Helpers/authHelper'




class App extends Component {
  state = {
    loginError: null,
    tokenDetails: null,
    loggedIn: false,
    users: null,
  }


  get storeUser() {
    return  localStorage.getItem('token')
  }

  set storeUser(toBeStored) {
    localStorage.setItem('token', toBeStored.token)
    localStorage.setItem('expiry', toBeStored.expiry)
    localStorage.setItem('userId', toBeStored.userId)
    localStorage.setItem('role', toBeStored.role)
  }

  

 authenticate = async (e, url) => {
   try {
    e.preventDefault()
    const form = e.target.elements


    const response = await api.post(`/users${url}`, {
      email: form.email.value,
      password: form.password.value
    })
    
    const token = response.data.token

    const tokenDetails = token && decodeJWT(token)
    this.setState({
      tokenDetails: tokenDetails,
      loggedIn: true
    })

    this.storeUser = { 
      token: token,
      expiry: this.state.tokenDetails.exp,
      userId: this.state.tokenDetails.sub,
      role: this.state.tokenDetails.role
    }

    setJwt(response.data.token)
    this.forceUpdate()


   } catch (error) {
      this.setState({
        loginError: error.message
      })
   }
 }


 expiryCheck = () => {
   const isExpired = (localStorage.expiry * 1000) - Date.now()

   if(isExpired >= 0) {
     setJwt(localStorage.token)
     this.setState({
       loggedIn: true
     })
   } else {
     localStorage.removeItem('token')
     localStorage.removeItem('expiry')
     localStorage.removeItem('userId')
     localStorage.removeItem('role')
   }
 }

  componentWillMount() {
    this.expiryCheck()
  }

  async componentDidMount() {
    try {
      const response = await api.get('/users')

      this.setState({
        users: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

 signOut = () => {
   api.get('/users/logout').then(() => {
     localStorage.removeItem('token')
     localStorage.removeItem('expiry')
     localStorage.removeItem('userId')
     localStorage.removeItem('role')
     this.setState({
       loggedIn: false
     })
   })
 }


  render() {
    const {loginError, loggedIn, users} = this.state


    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <div id="nav-bar">
          {
            this.state.loggedIn ? 
              (
                <Fragment>
                      <Link to="/topics">Topics</Link>
                      {isAdmin() && <Link to="/admin">Admin</Link>}
                  <a onClick={this.signOut}>Logout</a>

                </Fragment>
              ) : (
                <Fragment>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </Fragment>
              )
          }
          </div>
        </header>

        <Route exact path="/" render={(rProps) => (

            <Redirect to="/topics" />        
        )} />
        
        <Route path="/topics" render={(rProps) => (
          !this.state.loggedIn ? (
            <Redirect to="/login" />
          ) : (
                <TopicsView users={users} loggedIn={loggedIn} {...rProps} />
            )
        )} />

        <Route path="/login" render={(rProps) => (
          this.state.loggedIn ? (
          <Redirect to="/topics" />
        ) : (
          <LoginForm {...rProps} loginError={loginError} login={this.authenticate} />
        )
        )} />

        <Route path="/register" render={(rProps) => (
            this.state.loggedIn ? (
              <Redirect to="/topics" />
            ) : (
          <RegisterForm {...rProps} registerError={loginError} register={this.authenticate} />
            )
        )} />

          <Route path="/admin" render={(rProps) => (
            (this.state.loggedIn && isAdmin()) ? (
              <AdminPage users={users} />
            ) : (
                <Redirect to="/topics" />
              )
          )} />

      </div>
      </Router>
    );
  }
}

export default App;
