import React from 'react'
import { MainMenuStyle, MainMenuLink } from './MainMenu.styles'


const MainMenu = (props) => {
    
    const {setPath, signOut} = props
    return(
        <MainMenuStyle>
            <MainMenuLink onClick={() => setPath('/orders')} to="/dashboard/orders">Orders</MainMenuLink>
            <MainMenuLink onClick={() => setPath('/products')} to="/dashboard/products">Products</MainMenuLink>
            <MainMenuLink onClick={() => setPath('/suppliers')} to="/dashboard/suppliers">Suppliers</MainMenuLink>
            <MainMenuLink onClick={() => setPath('/clients')} to="/dashboard/clients">Clients</MainMenuLink>
            <MainMenuLink onClick={() => setPath('/staff')} to="/dashboard/staff">Staff</MainMenuLink>
            <MainMenuLink onClick={() => setPath('/account')} to="/dashboard/account">My Account</MainMenuLink>
            <MainMenuLink onClick={() => signOut()} to="/dashboard">Sign Out</MainMenuLink>
        </MainMenuStyle>
    )
}

export default MainMenu