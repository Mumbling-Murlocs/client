import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Authentication from '../Authentication/AuthenticationContainer'
import Dashboard from '../Dashboard/DashboardContainer/DashboardContainer'




const Switchboard = () => {
    return(
        
            <Router>
                <Fragment>
                    <Route exact path='/' />
                    <Route path='/login' component={ Authentication } />
                    <Route path='/dashboard' component={ Dashboard } />
                </Fragment>
            </Router>
        
    )
}

export default Switchboard