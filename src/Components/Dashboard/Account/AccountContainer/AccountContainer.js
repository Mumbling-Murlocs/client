import React, {Component, Fragment} from 'react'
import { Header, BodyWindow } from './AccountContainer.styles'
import { Route } from 'react-router-dom'
import MyAccount from '../MyAccount/MyAccount'
import store from '../../../../Redux/store'

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

    upgradeAccount = () => {
        
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
                        <MyAccount {...rProps}   />
                    )}  />
                </BodyWindow>
            </Fragment>
        )
    }
}


export default ProductsContainer
