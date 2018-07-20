import React from 'react'
import { productDisplay } from './Products.styles'

const Product = (props) => {

    const {product} = props

    return(
        <div>
            <div>
                <p>PIC HERE</p>
            </div>
            <div>
                <p>{product.name}</p>
                <p>{product.description}</p>
            </div>
        </div>   
    )
}


export default Product
