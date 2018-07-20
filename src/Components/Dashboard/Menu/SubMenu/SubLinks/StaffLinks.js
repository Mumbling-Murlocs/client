import React, {Fragment} from 'react'
import { defaultStyles } from '../../../../../Assets/Styles';
const { StyledLink } = defaultStyles


const StaffLinks = () => {
    return(
        <Fragment>
            <StyledLink to='/dashboard/staff'>All Staff</StyledLink>
           
        </Fragment>
    )
}
export default StaffLinks
