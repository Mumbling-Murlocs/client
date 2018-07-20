import React, {Component, Fragment} from 'react'
import { Header, BodyWindow } from './ProductsContainer.styles'
import { Route } from 'react-router-dom'
import NewProduct from '../NewProduct/NewProduct'
import AllProducts from '../AllProducts/AllProducts'
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

    componentDidMount () {
        // store.dispatch({
        //     type: 'products',
        //     customAction: 'get_all'
        // })
    }


    render(){

    // const {products} = store.getState()
    const products = [
        {companyId: "1",
        price: 3.50,
        productId: "HKIA",
        name: "Hello Kitty Island Adventures",
        description: "Best MMO Game",
        categories: ["game","online"],
        tags: ["game","online"],
        stockQty: 5},
        {companyId: "3",
            price: 4.50,
            productId: "WOW",
            name: "World of Warcraft",
            description: "Longest lasting MMO",
            categories: ["game","online"],
            tags: ["game","online"],
            stockQty: 20}
    ]
console.log(products)
        return (
            <Fragment>
                <Header>
                    
                </Header>
                <BodyWindow>
                    <Route path='/dashboard/products' render={(rProps) => (
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
