import React, {Fragment} from 'react'
import { Default } from '../../../../../Assets/Styles';


const ProductsLinks = () => {
    return(
        <Fragment>
            <Default.Link to='/dashboard/products'>All Products</Default.Link>
            <Default.Link to='/dashboard/products/new'>Add New Product</Default.Link>
            
        </Fragment>
    )
}
export default ProductsLinks
