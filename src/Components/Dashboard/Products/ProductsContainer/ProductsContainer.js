import React, {Component, Fragment} from 'react'
import { Header, BodyWindow } from './ProductsContainer.styles'
import { Route } from 'react-router-dom'
import NewProduct from '../NewProduct/NewProduct'
import AllProducts from '../AllProducts/AllProducts'
import store from '../../../../Redux/store'
import helpers from '../../../../Helpers'


const { api } = helpers

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

        // Replaced store.dispatch with this for our state updates and api requests
        store.dispatch({
            type: 'products',
            customAction: 'create',
            product: newProduct
        })
        api.products.create(newProduct, () => {
            this.props.history.push('/dashboard/products')
        })
    
    }

    componentDidMount () {
        // Replaced store.dispatch with this for our state updates and api requests
        api.products.all()
       
    }


    render(){

        const {products} = store.getState()

        return (
            <Fragment>
                <Header>
                    
                </Header>
                <BodyWindow>
                    <Route exact path='/dashboard/products' render={(rProps) => (
                        <AllProducts {...rProps} productsArray={products}  />
                    )}  />
                    <Route path='/dashboard/products/new' render={(rProps) => (
                        <NewProduct {...rProps} onSubmit={this.createProduct} />
                    )} />
                </BodyWindow>
            </Fragment>
        )
    }
}


export default ProductsContainer
