import React from 'react'
import {ButtonBox, TileBody, TileIMG, TextBox, ProductName, ProductPrice, ProductStockQty, ProductCompanyId, ProductProductId, ProductDescription, EditButton, DeleteButton} from './ProductTile.styles'
import Helpers from '../../../../../Helpers'
import store from '../../../../../Redux/store'

const {canDelete} = Helpers.authorization

const ProductTile = (props) => {

    const { product, deleteProduct } = props

    return (
        <TileBody>
                <TileIMG url={product.image}>
                </TileIMG>
                <TextBox>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.price}</ProductPrice>
                    <ProductStockQty>Quantity Available:  {product.stockQty}</ProductStockQty>
                    <ProductCompanyId>Seller:  {product.companyId}</ProductCompanyId>
                    <ProductProductId>Internal SKU:  {product.productId}</ProductProductId>
                    <ProductDescription>{product.description}</ProductDescription>
                    <ButtonBox>
                        <EditButton>Edit</EditButton>
                    {canDelete(product.companyId, store.getState().currentUser.company._id) && <DeleteButton onClick={() => deleteProduct(product)}>Delete</DeleteButton>}
                    </ButtonBox>
                </TextBox>
        </TileBody>
    )

}

export default ProductTile