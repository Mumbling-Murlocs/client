import React, { Component, Fragment } from 'react'
import {  BodyWindow, Header} from './OrdersContainer.styles'
import { Route } from 'react-router-dom'
import NewOrder from '../NewOrder/NewOrder'
import store from '../../../../Redux/store'
import {api} from '../../../../Helpers'



class OrdersContainer extends Component {

    componentDidMount() {
        this.fetchSuppliers()
    }

    fetchSuppliers = () => {
        api.company.all({customAction: 'all_suppliers'})
    }

    // This function sets the active supplier and their product catelogue in the store for the "ViewSupplier" component.
    setActiveSupplier = (id) => {
        store.dispatch({
            type: '/company',
            customAction: 'set_active_supplier',
            activeSupplier: store.getState().suppliers.find(supplier => supplier._id === id)
        })
        api.products.all({
            customAction: 'set_supplier_catalogue',
            header: 'supplier_id',
            headerValue: id
        })
    }

    
    render() {
        

        return (
            <Fragment>
                <Header>

                </Header>
                <BodyWindow>
                
                    <Route path='/dashboard/orders/new' render={(rProps) => (
                        <NewOrder setActiveSupplier={this.setActiveSupplier} suppliers={store.getState().suppliers} activeSupplier={store.getState().activeSupplier} catelogue={store.getState().supplierCatalogue} {...rProps} onSubmit={this.createProduct} />
                    )} />
                
                </BodyWindow>
            </Fragment>
        )
    }
}

export default OrdersContainer
