import React, {Fragment} from 'react'
import { defaultStyles } from '../../../../../Assets/Styles';
const { StyledLink } = defaultStyles


const ClientsLinks = () => {
    return(
        <Fragment>
            <StyledLink to='/dashboard/clients'>All Clients</StyledLink>
            <StyledLink to='/dashboard/clients/favourite'>Favourite Clients</StyledLink>
            <StyledLink to='/dashboard/clients/suspended'>Suspended Clients</StyledLink>
        </Fragment>
    )
}
export default ClientsLinks
