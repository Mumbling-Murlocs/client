import React from 'react'
import Tag from './InvoiceTemplate.styles'
import moment from 'moment'
import store from '../../../../Redux/store'

const InvoiceTemplate = (props) => {
    const {} = props
    const purchaser = store.getState().currentUser.company
    const supplier = store.getState().activeSupplier
    return(
        <Tag.Panel>
                <Tag.HeadingContainer>
                    <Tag.AdressContainer>
                        
                        <h3>Invoice</h3>
                        <p><strong>{moment(Date.now()).format('dddd, MMMM Do YYYY')}</strong> </p>
                        <p><strong>To:</strong> {purchaser && purchaser.name}</p>
                        <Tag.Address>{purchaser && purchaser.address.lineOne}</Tag.Address>
                        <Tag.Address>{purchaser && purchaser.address.city}</Tag.Address>
                        <Tag.Address>{purchaser && purchaser.address.country + ', ' + purchaser.address.postcode}</Tag.Address>
                   
                    </Tag.AdressContainer>
                    <Tag.AdressContainer>

                        <h3>Order Number: Ks106</h3>
                        <p><strong>{moment(Date.now()).format('dddd, MMMM Do YYYY')}</strong> </p>
                        <p><strong>To:</strong> {supplier && supplier.name}</p>
                        <Tag.Address>{supplier && supplier.address.lineOne}</Tag.Address>
                        <Tag.Address>{supplier && supplier.address.city}</Tag.Address>
                        <Tag.Address>{supplier && supplier.address.country + ', ' + supplier.address.postcode}</Tag.Address>
                    </Tag.AdressContainer>
                </Tag.HeadingContainer>

        </Tag.Panel>
    )
}

export default InvoiceTemplate
