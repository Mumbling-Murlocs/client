import React, {Component, Fragment} from 'react'
import { Header, BodyWindow } from './AccountContainer.styles'
import { Route } from 'react-router-dom'
import MyAccount from '../MyAccount/MyAccount'
import store from '../../../../Redux/store'
import helpers from '../../../../Helpers/'
const {api} = helpers

class ProductsContainer extends Component {

    updateAccount = (e) => {
        e.preventDefault()
        const form = e.target.elements
        
        const newProduct = {
            // companyId: localStorage.user.company._id,
            price: form.price.value,
            productId: form.productId.value,
            name: form.name.value,
            description: form.description.value,
            // categories: form.categories.value,
            // tags: form.tags.value,
            stockQty: form.stockQty.value
        }

        store.dispatch({
            type: 'products',
            customAction: 'create',
            newProduct: newProduct
        })
    }

    editAccount = () => {

    }

    upgradeAccount = (accountType) => {
        const id = store.getState().currentUser.company._id
        const companyOwnerId = store.getState().currentUser.company.companyOwnerId
        api.company.update(id, { accountType, companyOwnerId })
    }

    componentDidMount () {
        
    }


    render(){

      


        return (
            <Fragment>
                <Header>
                    
                </Header>
                <BodyWindow>
                    <Route path='/dashboard/account' render={(rProps) => (
                        <MyAccount {...rProps} upgradeAccount={this.upgradeAccount}   />
                    )}  />
                </BodyWindow>
            </Fragment>
        )
    }
}


export default ProductsContainer
