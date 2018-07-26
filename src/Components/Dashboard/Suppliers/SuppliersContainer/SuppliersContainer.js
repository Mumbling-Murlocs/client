import React, { Component, Fragment } from 'react'
import { BodyWindow, Header } from './SuppliersContainer.styles'
import { Route, Redirect } from 'react-router-dom'
import AllSuppliers from '../AllSuppliers/AllSuppliers'
import {api} from '../../../../Helpers'
import store from '../../../../Redux/store'
import ViewSupplier from '../ViewSupplier/ViewSupplier';




class SuppliersContainer extends Component {

    componentDidMount () {
        this.fetchSuppliers()
    }

    fetchSuppliers = () => {
        api.company.all({
            customAction: 'all_suppliers'
        })
    }

// This function sets the active supplier and their product catelogue in the store for the "ViewSupplier" component.
    viewSupplier = (id) => {
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
    // This function redirects purchaser to a new order page where they can view supplier's catelogue and add items to their order.
    newOrder = () => {
        console.log('NewOrder button pushed')
        this.props.history.push('/dashboard/orders/new')
    }


    render() {
        
        

        return (
            <Fragment>
                <Header>

                </Header>
                <BodyWindow>
                    {/* These are all the sub routes of 'Suppliers' section of the app */}
                    <Route exact path='/dashboard/suppliers' render={(rProps) => (
                        <AllSuppliers viewSupplier={this.viewSupplier} suppliers={store.getState().suppliers} {...rProps}  />
                    )} />

                    <Route exact path='/dashboard/suppliers/id/:id' render={(rProps) =>{ 
                        if (store.getState().activeSupplier){
                            return <ViewSupplier catelogue={store.getState().supplierCatalogue} setActive={this.setActiveSupplier} {...rProps} newOrder={this.newOrder}  supplier={store.getState().activeSupplier} />
                        } else {
                            return <Redirect to='/dashboard/suppliers' />
                        }
                    }} />


                </BodyWindow>
            </Fragment>
        )
    }
}

export default SuppliersContainer