import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AuthenticationContainer from '../Authentication/AuthenticationContainer'
import Dashboard from '../Dashboard/DashboardContainer/DashboardContainer'
import store from '../../Redux/store'




const Switchboard = (props) => {
    const { loggedIn } = store.getState()
 
    return(
        
        <Router>
                <Fragment>

                    <Route path='/' component={ AuthenticationContainer } />

                    <Route exact path='/' render={(rProps) => {
                        if (store.getState().loggedIn){
                                return <Redirect to="/dashboard" />
                            } else {
                                return <Redirect to="/login" />     
                            }
                    }} />

                    <Route path='/register' render={(rProps) => (
                        <AuthenticationContainer {...rProps}  />
                    )} />

                    <Route path='/login' render={(rProps) => (
                        <AuthenticationContainer {...rProps}  />
                    )} />

                    <Route path='/create-company' render={(rProps) => (
                        <AuthenticationContainer {...rProps} />
                    )} />
                    
                    <Route path='/dashboard' render={() => {
                        if (!store.getState().loggedIn) {
                            return <Redirect to="/login" />
                        } else if (store.getState().currentUser.company === undefined) {
                            return <Redirect to="/create-company" />
                        } else {
                            return <Dashboard />
                            
                        }
                    }} />
                </Fragment>
            </Router>
        
    )
}

export default Switchboard