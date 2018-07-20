import React, { Component } from 'react'
import MenuContainer from '../Menu/MenuContainer/MenuContainer';
import OrdersContainer from '../Orders/OrdersContainer/OrdersContainer';
import ProductsContainer from '../Products/ProductsContainer/ProductsContainer';
import { DashboardLayout, Header, SidePanel } from './Dashboard.styles.js'
import { Route } from 'react-router-dom'



class Dashboard extends Component {

    render(){
        return(
                <DashboardLayout>
                    <SidePanel>
                        <Header>
                            <h3>Order-Ezy</h3>
                        </Header>
                        <MenuContainer />
                    </SidePanel>
                    <div>   
                        <Route path='/dashboard/orders' component={OrdersContainer} />
                        <Route path='/dashboard/products' component={ProductsContainer} />
                    </div>
                </DashboardLayout>
        )
    }

}

export default Dashboard
