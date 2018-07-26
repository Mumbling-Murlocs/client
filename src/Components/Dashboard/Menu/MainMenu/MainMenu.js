import React from 'react'
import { MainMenuStyle, MainMenuLink, SignOutLink } from './MainMenu.styles'
import {authorization} from '../../../../Helpers'


const MainMenu = (props) => {
    
    const {setPath, signOut} = props
    return(
        <MainMenuStyle>
            <MainMenuLink onClick={() => setPath('/orders')} to="/dashboard/orders">Orders</MainMenuLink>
            {authorization.isSupplier() && <MainMenuLink onClick={() => setPath('/products')} to="/dashboard/products">Products</MainMenuLink>}
            <MainMenuLink onClick={() => setPath('/suppliers')} to="/dashboard/suppliers">Suppliers</MainMenuLink>
            {authorization.isSupplier() && <MainMenuLink onClick={() => setPath('/clients')} to="/dashboard/clients">Clients</MainMenuLink>}
            <MainMenuLink onClick={() => setPath('/staff')} to="/dashboard/staff">Staff</MainMenuLink>
            <MainMenuLink onClick={() => setPath('/account')} to="/dashboard/account">My Account</MainMenuLink>
            <SignOutLink onClick={() => signOut()} to="/dashboard">Sign Out</SignOutLink>
        </MainMenuStyle>
    )
}

export default MainMenu