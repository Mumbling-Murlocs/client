import React from 'react'
import {Body, Button} from './NewProduct.styles'
import Form from '../../../../UI/Form'
import FormField from '../../../../UI/FormField'
import TextArea from '../../../../UI/TextArea'



const NewProduct = (props) => {
    console.log(props)
    return(
        <Body>
            <div>
                <Form onSubmit={(e) => props.onSubmit(e)}>
                    <FormField  label="Product Name" name="name" type="text" onChange="" />
                    <FormField  label="Product Id" name="productId" type="text" onChange="" />
                    <FormField  step=".01" label="Product Price" name="price" type="number" onChange="" />
                    <FormField  label="Product QTY" name="stockQty" type="number" onChange="" />
                    <TextArea label="Product Description" name="description" type="text" onChange="" />

                    <Button>Create new product</Button>
                </Form>
            </div>
        </Body>
    )
}


export default NewProduct
