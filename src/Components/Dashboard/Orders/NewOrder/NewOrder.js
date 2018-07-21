import React from 'react'
import {
    Body, Button, MainPanel, PanelContainer, Panel, PanelTitle } from './NewOrder.styles'
// import Form from '../../../../UI/Form'
// import FormField from '../../../../UI/FormField'
// import TextArea from '../../../../UI/TextArea'


//   companyDetails: Schema.Types.Mixed,
//     companyId: String,

//     supplierDetails: Schema.Types.Mixed,
//     supplierId: String,

//     deliveryAddress: String,
//     products: Array,
//     orderNo: Number,
//     uniqueIdentifier: String,
//     datePlaced: Date,

//     orderReceived: Boolean,
//     orderDispatched: Boolean,
//     orderPaid: Boolean,

const NewOrder = (props) => {
    console.log(props)
    return (
        <Body>
           <MainPanel>
               <PanelContainer>
                    <PanelTitle>New Order</PanelTitle>
               <Panel>
               </Panel>
               </PanelContainer>
           </MainPanel>
           <MainPanel>
           </MainPanel>
        </Body>
    )
}


export default NewOrder