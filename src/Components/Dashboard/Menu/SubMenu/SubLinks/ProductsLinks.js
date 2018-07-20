import React, {Fragment} from 'react'
import { defaultStyles } from '../../../../../Assets/Styles';
const { StyledLink } = defaultStyles


const ProductsLinks = () => {
    return(
        <Fragment>
            <StyledLink to='/dashboard/products'>All Products</StyledLink>
            <StyledLink to='/dashboard/products/new'>Add New Product</StyledLink>
            
        </Fragment>
    )
}
export default ProductsLinks
