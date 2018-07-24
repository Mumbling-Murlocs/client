import React from 'react'
import Tag from './ActiveSupplier.styles.js'

const ActiveSupplier = (props) => {
    const { activeSupplier, catelogue } = props
    return(
        <Tag.SupplierPanel>
            <p>{activeSupplier.name}</p> 
            <p>{activeSupplier.companyType}</p> 
            <p>{activeSupplier.address}</p> 
            
        </Tag.SupplierPanel>
    )
}

export default ActiveSupplier
