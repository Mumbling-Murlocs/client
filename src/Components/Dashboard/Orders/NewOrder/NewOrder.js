import React from 'react'
import { Body, MainPanel, PanelContainer, Panel, PanelTitle } from './NewOrder.styles'
import ActiveSupplier from '../SupplierPanel/ActiveSupplier/ActiveSupplier'
import SupplierList from '../SupplierPanel/SupplierList/SupplierList'
import InvoiceTemplate from '../InvoiceTemplate/InvoiceTemplate'
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
    const { activeSupplier, catelogue, setActiveSupplier, suppliers } = props



    let supplierPanelContent = null
    if (activeSupplier) {
        supplierPanelContent = <ActiveSupplier activeSupplier={activeSupplier} catelogue={catelogue} />
    } else {
        supplierPanelContent = <SupplierList setActiveSupplier={setActiveSupplier} suppliers={suppliers} />
    }
    const SupplierTitle = activeSupplier ? `${activeSupplier.name} Product List` : 'My Supplier list'

    return (
        <Body>
           <MainPanel>
               <PanelContainer>
                    <PanelTitle>New Invoice</PanelTitle>
                    <InvoiceTemplate />
              
               </PanelContainer>
           </MainPanel>

           <MainPanel>
            <PanelContainer>
                    <PanelTitle>{SupplierTitle}</PanelTitle>
                        {supplierPanelContent}
            </PanelContainer>
           </MainPanel>
        </Body>
    )
}


export default NewOrder