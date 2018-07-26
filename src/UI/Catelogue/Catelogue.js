import React from 'react'
import Tag from './Catelogue.styles.js'

const Catelogue = (props) => {
    // <Tag.MainPanel>
    //     <Tag.PanelContainer>
            
            
    //     </Tag.PanelContainer>
    // </Tag.MainPanel>

 



    return(
        <Tag.MainPanelCatelogue width={props.width} padding={props.padding}>
            <Tag.CatelogueContainer padding={props.padding}>
                    <Tag.PanelTitle>Supplier catalogue</Tag.PanelTitle>
                    <Tag.HeadPanel>
                        <Tag.Row>
                            <Tag.Col width='150px'><strong>Product Image</strong></Tag.Col>
                            <Tag.Col><strong>Product Name</strong></Tag.Col>
                            {!props.description && <Tag.Col><strong>Product Description</strong></Tag.Col>}
                            <Tag.Col><strong>Product ID</strong> (SKU)</Tag.Col>
                            <Tag.Col><strong>Stock Qty</strong></Tag.Col>
                            <Tag.Col><strong>Price</strong></Tag.Col>
                        </Tag.Row>
                    </Tag.HeadPanel>
                <Tag.Products>
                  
                    {Array.isArray(props.catelogue) && props.catelogue.map(product => {
                        return (
                            <Tag.ProductPanel>
                                <Tag.Row>
                                    <Tag.Img />
                                    <Tag.Col >{product.name}</Tag.Col>
                                    {!props.description && <Tag.Col>{(product.description.length > 50) ? product.description = product.description.substring(0, 50) + '...' : product.description}</Tag.Col>}
                                    <Tag.Col>{product.productId}</Tag.Col>
                                    <Tag.Col>{product.stockQty}</Tag.Col>
                                    <Tag.Col>{product.price}</Tag.Col>
                                </Tag.Row>
                            </Tag.ProductPanel>
                        )
                    }
                    )}
                </Tag.Products>
            </Tag.CatelogueContainer>
        </Tag.MainPanelCatelogue>
    )
}

export default Catelogue
