import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Authentication from '../Authentication/AuthenticationContainer'




const Switchboard = () => {
    return(
        
            <Router>
                <Fragment>
                    <Route exact path='/' render={ () => (
                        <Redirect to='/login' />
                    ) }/>
                    <Route path='/login' component={ Authentication } />
                </Fragment>
            </Router>
        
    )
}

export default Switchboard