import React, {Fragment} from 'react'
import Catelogue from '../../../../UI/Catelogue/Catelogue'


import Tag from './ViewSupplier.style'

const ViewSupplier = (props) => {
    const { catelogue, supplier, newOrder } = props
    
    

    return(
        <Fragment>
            <Tag.Body>
                <Tag.MainPanelSupplier>
                    <Tag.PanelContainer>
                        <Tag.PanelTitle>Supplier details</Tag.PanelTitle>
                        <Tag.Panel>
                            <Tag.SupplierIMG url={supplier && supplier.image}>
                            </Tag.SupplierIMG>
                            <h3>{supplier && supplier.name}</h3>
                            <Tag.Details>{supplier && supplier.businessType}</Tag.Details>
                            <Tag.Details>{supplier && supplier.address.lineOne}</Tag.Details>
                            <Tag.Details>{supplier && supplier.address.city}</Tag.Details>
                            <Tag.Details>{supplier && supplier.address.country + ', ' + supplier.address.postcode}</Tag.Details>
                            <Tag.Details>{supplier && supplier.deliverDays}</Tag.Details>
                            <div>
                                <Tag.AddButton>Add to favourites</Tag.AddButton>
                                <Tag.OrderButton onClick={() => newOrder()}>Create an order</Tag.OrderButton>
                            </div>
                            

                        </Tag.Panel>
                    </Tag.PanelContainer>
                </Tag.MainPanelSupplier>

                <Catelogue catelogue={catelogue} />
            </Tag.Body>
        </Fragment>
    )
}

export default ViewSupplier
