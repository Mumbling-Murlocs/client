import React from 'react'
import Tag from './AllProducts.styles'
import Catelogue from '../../../../UI/Catelogue/Catelogue'


const AllProducts = (props) => {
    const {productsArray, deleteProduct} = props

    return(

            <Tag.Body>
                <Catelogue catelogue={productsArray} />
              
            </Tag.Body> 
    )
}

export default AllProducts
