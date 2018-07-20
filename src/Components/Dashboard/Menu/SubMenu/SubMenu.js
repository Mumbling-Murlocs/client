import React, {Fragment} from 'react'
import { SubMenuStyle } from './SubMenu.styles'
import store from '../../../../Redux/store';
import OrdersLinks from './SubLinks/OrdersLinks';
import ProductsLinks from './SubLinks/ProductsLinks';
import SuppliersLinks from './SubLinks/SuppliersLinks';
import ClientsLinks from './SubLinks/ClientsLinks';
import StaffLinks from './SubLinks/StaffLinks';



const SubMenu = (props) => {
    const {path} = store.getState()
    console.log(path)

    let subMenuLink = null

        if(path === '/orders') { 
            subMenuLink = <OrdersLinks />
        } else if (path === '/products') {
            subMenuLink = <ProductsLinks />
        } else if (path === '/suppliers') {
            subMenuLink = <SuppliersLinks />
        } else if (path === '/clients') {
            subMenuLink = <ClientsLinks />
        } else if (path === '/staff') {
            subMenuLink = <StaffLinks />
        }
    
        

    return(
        <SubMenuStyle>
            {subMenuLink}
        </SubMenuStyle>
    )
}

export default SubMenu
