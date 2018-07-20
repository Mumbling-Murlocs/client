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
                        if (loggedIn){
                            return <Redirect to="/dashboard" />
                        } else {
                            return <Redirect to="/login" />     
                        }
                    }} />
                    <Route path='/register' component={ AuthenticationContainer } />
                    <Route path='/login' component={ AuthenticationContainer } />
                    <Route path='/dashboard' component={ Dashboard } />
                </Fragment>
            </Router>
        
    )
}

export default Switchboard