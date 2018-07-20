import React, { Component } from 'react'
import MenuContainer from '../Menu/MenuContainer/MenuContainer';
import OrdersContainer from '../Orders/OrdersContainer/OrdersContainer';
import ProductsContainer from '../Products/ProductsContainer/ProductsContainer';
import { DashboardLayout, Header, SidePanel, Window, LogoBackground } from './Dashboard.styles.js'
import { Route } from 'react-router-dom'
import logoPath from "../../../Assets/Images/logo.svg"





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
                    <Window>  
                    <LogoBackground>
                        <img
                            src={logoPath}
                            height='75%'
                            width='75%'

                        />
                    </LogoBackground> 
                        
                        <Route path='/dashboard/orders' component={OrdersContainer} />
                        <Route path='/dashboard/products' component={ProductsContainer} />
                    </Window>
                </DashboardLayout>
        )
    }

}

export default Dashboard
