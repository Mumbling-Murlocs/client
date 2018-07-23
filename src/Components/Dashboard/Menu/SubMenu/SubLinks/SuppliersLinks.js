import React, {Fragment} from 'react'
import { Default } from '../../../../../Assets/Styles';


const SuppliersLinks = () => {
    return(
        <Fragment>
            <Default.Link to='/dashboard/suppliers'>All Suppliers</Default.Link>
            <Default.Link to='/dashboard/suppliers/my-suppliers'>My Suppliers</Default.Link>
        </Fragment>
    )
}
export default SuppliersLinks
