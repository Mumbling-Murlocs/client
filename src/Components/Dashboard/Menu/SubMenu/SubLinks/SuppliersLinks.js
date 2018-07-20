import React, {Fragment} from 'react'
import { defaultStyles } from '../../../../../Assets/Styles';
const { StyledLink } = defaultStyles


const SuppliersLinks = () => {
    return(
        <Fragment>
            <StyledLink to='/dashboard/suppliers'>All Suppliers</StyledLink>
            <StyledLink to='/dashboard/suppliers/my-suppliers'>My Suppliers</StyledLink>
        </Fragment>
    )
}
export default SuppliersLinks
