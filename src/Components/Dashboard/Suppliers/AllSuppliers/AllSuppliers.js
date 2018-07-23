import React, {Fragment} from 'react'
import CompanyTile from '../../GeneralComponents/CompanyTile/CompanyTile'
import { Body } from './AllSuppliers.styles'

const AllSuppliers = (props) => {
    const {suppliers} = props

    return(
        <Fragment>
            <Body>
            {suppliers && suppliers.map(supplier => <CompanyTile company={supplier} />)}
            </Body>
        </Fragment>
    )
}

export default AllSuppliers
