import React, { Component, Fragment } from 'react'
import MenuContainer from './Menu/MenuContainer';
import { DashboardLayout, Header, SidePanel } from './Dashboard.styles.js'



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
                    <div></div>
                </DashboardLayout>
     
        )
    }

}

export default Dashboard
