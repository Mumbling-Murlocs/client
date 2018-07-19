import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthenticationContainer from '../Authentication/AuthenticationContainer'
import Dashboard from '../Dashboard/DashboardContainer/DashboardContainer'




const Switchboard = (props) => {
    
    return(
        
            <Router>
                <Fragment>
                    <Route exact path='/' />
                    <Route path='/register' component={ AuthenticationContainer } />
                    <Route path='/login' component={ AuthenticationContainer } />
                    <Route path='/dashboard' component={ Dashboard } />
                </Fragment>
            </Router>
        
    )
}

export default Switchboard