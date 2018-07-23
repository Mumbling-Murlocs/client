import React, { Component, Fragment } from 'react'
import { BodyWindow, Header } from './SuppliersContainer.styles'
import { Route } from 'react-router-dom'
import AllSuppliers from '../AllSuppliers/AllSuppliers'
import helpers from '../../../../Helpers'
import store from '../../../../Redux/store'
const { api } = helpers




class SuppliersContainer extends Component {


    fetchSuppliers = () => {
        api.company.all('all_suppliers')
    }

    componentDidMount () {
        this.fetchSuppliers()
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
                        <AllSuppliers suppliers={store.getState().suppliers} {...rProps}  />
                    )} />

                </BodyWindow>
            </Fragment>
        )
    }
}

export default SuppliersContainer