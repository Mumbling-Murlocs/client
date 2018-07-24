import React, {Fragment} from 'react'
import CustomTile from '../../GeneralComponents/CustomTile/CustomTile'


import { Body, MainPanelSupplier, MainPanelCatelogue, PanelContainer, Panel, PanelTitle, SupplierIMG, Details, AddButton, OrderButton, CatelogueContainer } from './ViewSupplier.style'

const ViewSupplier = (props) => {
    const { catelogue, supplier, newOrder } = props
    
    

    return(
        <Fragment>
            <Body>
                <MainPanelSupplier>
                    <PanelContainer>
                        <PanelTitle>Supplier details</PanelTitle>
                        <Panel>
                            <SupplierIMG url={supplier && supplier.image}>
                            </SupplierIMG>
                            <h3>{supplier && supplier.name}</h3>
                            <Details>{supplier && supplier.businessType}</Details>
                            <Details>{supplier && supplier.address}</Details>
                            <Details>{supplier && supplier.deliverDays}</Details>
                            <div>
                                <AddButton>Add to favourites</AddButton>
                                <OrderButton onClick={() => newOrder()}>Place an order</OrderButton>
                            </div>
                            

                        </Panel>
                    </PanelContainer>
                </MainPanelSupplier>

                <MainPanelCatelogue>
                    <PanelTitle>Supplier catalogue</PanelTitle>
                    <CatelogueContainer>
                       
                            {catelogue && catelogue.map(product => {
                                return(
                                   
                                    <CustomTile width='310px' margin='15px' key={product._id}>
                                        <p>{product.name}</p>
                                    </CustomTile>
                                 
                                )
                            })}



                      
                    </CatelogueContainer>
                </MainPanelCatelogue>
            </Body>
        </Fragment>
    )
}

export default ViewSupplier
