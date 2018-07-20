import React from 'react'
import {Body} from './AllProducts.styles'
import Product from '../Product'


const AllProducts = (props) => {
    const {productsArray} = props

    return(
        <Body>
            {productsArray && productsArray.map(product => <Product product={product}/>)}
        </Body>  
    )
}


export default AllProducts
