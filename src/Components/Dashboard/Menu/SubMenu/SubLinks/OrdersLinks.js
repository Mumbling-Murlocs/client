import React, {Fragment} from 'react'
import { defaultStyles } from '../../../../../Assets/Styles';
const { StyledLink } = defaultStyles


const OrdersLinks = () => {
    return(
        <Fragment>
            <StyledLink to='/dashboard/orders'>All Orders</StyledLink>
            <StyledLink to='/dashboard/orders/incoming'>Incoming</StyledLink>
            <StyledLink to='/dashboard/orders/outgoing'>Outgoing</StyledLink>
            <StyledLink to='/dashboard/orders/settings'>Settings</StyledLink>
        </Fragment>
    )
}
export default OrdersLinks
