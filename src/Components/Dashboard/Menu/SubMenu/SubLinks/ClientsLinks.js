import React, {Fragment} from 'react'
import { Default } from '../../../../../Assets/Styles';



const ClientsLinks = () => {
    return(
        <Fragment>
            <Default.Link to='/dashboard/clients'>All Clients</Default.Link>
            <Default.Link to='/dashboard/clients/favourite'>Favourite Clients</Default.Link>
            <Default.Link to='/dashboard/clients/suspended'>Suspended Clients</Default.Link>
        </Fragment>
    )
}
export default ClientsLinks
