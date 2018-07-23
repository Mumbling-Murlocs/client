import React, { Component, Fragment } from 'react'
import {  BodyWindow, Header} from './OrdersContainer.styles'
import { Route } from 'react-router-dom'
import NewOrder from '../NewOrder/NewOrder'
import helpers from '../../../../Helpers'
import store from '../../../../Redux/store'
const { api } = helpers



class OrdersContainer extends Component {

    componentDidMount() {
        this.fetchSuppliers()
    }

    fetchSuppliers = () => {
        api.company.all('all_suppliers')
    }

    
    render() {

        return (
            <Fragment>
                <Header>

                </Header>
                <BodyWindow>
                
                    <Route path='/dashboard/orders/new' render={(rProps) => (
                        <NewOrder selectedSupplier={store.getState().selectedSupplier} {...rProps} onSubmit={this.createProduct} />
                    )} />
                
                </BodyWindow>
            </Fragment>
        )
    }
}

export default OrdersContainer
