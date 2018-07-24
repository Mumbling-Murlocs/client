import React from 'react'
import {Body} from './AllProducts.styles'
import ProductTile from './ProductTile/ProductTile'


const AllProducts = (props) => {
    const {productsArray, deleteProduct} = props

    return(
        
            <Body>
                { Array.isArray(productsArray) && productsArray.map(product => <ProductTile deleteProduct={deleteProduct} product={product}/>)}
            </Body> 
    )
}


export default AllProducts
