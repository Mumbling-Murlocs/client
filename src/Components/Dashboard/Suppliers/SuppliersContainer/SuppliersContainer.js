import React, { Component, Fragment } from 'react'
import { BodyWindow, Header } from './SuppliersContainer.styles'
import { Route } from 'react-router-dom'
import AllSuppliers from '../AllSuppliers/AllSuppliers'
import helpers from '../../../../Helpers'
import store from '../../../../Redux/store'
const { api } = helpers




class SuppliersContainer extends Component {

    componentDidMount () {
        this.fetchSuppliers()
    }

    fetchSuppliers = () => {
        api.company.all('all_suppliers')
    }

    setActiveSupplier = (supplier) => {
        store.dispatch({
            type: 'set_active_supplier',
            supplier: supplier
        })
    }


    render() {
        console.log(store.getState().suppliers)

        return (
            <Fragment>
                <Header>

                </Header>
                <BodyWindow>
                    {/* These are all the sub routes of 'Suppliers' section of the app */}
                    <Route exact path='/dashboard/suppliers' render={(rProps) => (
                        <AllSuppliers onClick={this.setActiveSupplier} suppliers={store.getState().suppliers} {...rProps}  />
                    )} />

                </BodyWindow>
            </Fragment>
        )
    }
}

export default SuppliersContainer