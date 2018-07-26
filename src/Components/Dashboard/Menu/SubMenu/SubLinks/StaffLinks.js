import React, {Fragment} from 'react'
import { Default } from '../../../../../Assets/Styles';


const StaffLinks = () => {
    return(
        <Fragment>
            <Default.Link to='/dashboard/staff'>All Staff</Default.Link>
            <Default.Link to='/dashboard/staff/new'>Add New Staff Member</Default.Link>
        </Fragment>
    )
}
export default StaffLinks
