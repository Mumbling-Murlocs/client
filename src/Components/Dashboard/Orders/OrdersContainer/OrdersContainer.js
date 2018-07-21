import React, { Component, Fragment } from 'react'
import {  BodyWindow, Header} from './OrdersContainer.styles'
import { Route } from 'react-router-dom'
import NewOrder from '../NewOrder/NewOrder'



class OrdersContainer extends Component {
    
    render() {
        return (
            <Fragment>
                <Header>

                </Header>
                <BodyWindow>
                
                    <Route path='/dashboard/orders/new' render={(rProps) => (
                        <NewOrder {...rProps} onSubmit={this.createProduct} />
                    )} />
                
                </BodyWindow>
            </Fragment>
        )
    }
}

export default OrdersContainer
