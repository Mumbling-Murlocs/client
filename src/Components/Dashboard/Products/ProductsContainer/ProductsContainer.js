import React, {Component, Fragment} from 'react'
import { Header, BodyWindow } from './ProductsContainer.styles'
import { Route } from 'react-router-dom'
import NewProduct from '../NewProduct/NewProduct'
import store from '../../../../Redux/store'

class ProductsContainer extends Component {

    createProduct = (e) => {
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


    render(){
        return (
            <Fragment>
                <Header>
                    
                </Header>
                <BodyWindow>
                    <Route path='/dashboard/products/new' render={(rProps) => (
                        <NewProduct {...rProps} onSubmit={this.createProduct} />
                    )} />

                </BodyWindow>
            </Fragment>
        )
    }
}


export default ProductsContainer
