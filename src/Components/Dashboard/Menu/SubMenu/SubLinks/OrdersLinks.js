import React, {Fragment} from 'react'
import { Default } from '../../../../../Assets/Styles';



const OrdersLinks = () => {
    return(
        <Fragment>
            <Default.Link to='/dashboard/orders/new'>Place New Order</Default.Link>
            <Default.Link to='/dashboard/orders'>All Orders</Default.Link>
            <Default.Link to='/dashboard/orders/incoming'>Incoming</Default.Link>
            <Default.Link to='/dashboard/orders/outgoing'>Outgoing</Default.Link>
            <Default.Link to='/dashboard/orders/settings'>Settings</Default.Link>
        </Fragment>
    )
}
export default OrdersLinks
