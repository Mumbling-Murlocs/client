import React from 'react'
import Card from '../../../../../UI/Card/Card'
import Tag from './SupplierList.styles'


const AllSuppliers = (props) => {
    const { setActiveSupplier, suppliers } = props
    
    return (
           <div> 
               {suppliers && suppliers.map(supplier => {
                return(
                <Card>
                    <Tag.Name>{supplier.name}</Tag.Name>
                    <Tag.P>{supplier.companyType}</Tag.P>
                        <Tag.P>{supplier.address.lineOne}</Tag.P>
                        <Tag.P>{supplier.address.city}</Tag.P>
                        <Tag.P>{`${supplier.address.country}, ${supplier.address.postcode}`}</Tag.P> 
                        <Tag.Button onClick={() => setActiveSupplier(supplier._id)}>Place Order</Tag.Button>
                </Card>
                )
               })}      
           </div>       
    )
}


export default AllSuppliers