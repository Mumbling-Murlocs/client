import React, { Component, Fragment } from 'react'
import MenuContainer from '../Menu/MenuContainer/MenuContainer';
import OrdersContainer from '../Orders/OrdersContainer/OrdersContainer';
import { DashboardLayout, Header, SidePanel } from './Dashboard.styles.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'



class Dashboard extends Component {

    render(){
        return(
       
            <Router>
                <DashboardLayout>
                    <SidePanel>
                        <Header>
                            <h3>Order-Ezy</h3>
                        </Header>
                        <MenuContainer />
                    </SidePanel>
                    <div>   
                        <Route path='/dashboard/orders' component={OrdersContainer} />
                    </div>
                </DashboardLayout>
            </Router>
     
        )
    }

}

export default Dashboard
