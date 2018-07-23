import React from 'react'
import { Body, Button, MainPanel, PanelContainer, Panel, PanelTitle } from './NewOrder.styles'
import ViewSupplier from '../SuppliersDRAFT/ViewSupplier'
import AllSuppliers from '../../Suppliers/AllSuppliers/AllSuppliers'
import store from '../../../../Redux/store'





//    companyDetails: Schema.Types.Mixed,
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
    let supplierPanelContent = null
    if (props.selectedSupplier) {
        supplierPanelContent = <ViewSupplier />
    } else {
        supplierPanelContent = <AllSuppliers suppliers={store.getState().suppliers} />
    }
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
                <PanelContainer>
                    <PanelTitle>Suppliers</PanelTitle>
                        {supplierPanelContent}
                    
                </PanelContainer>
           </MainPanel>
        </Body>
    )
}


export default NewOrder