import React from 'react'
import { MainMenuStyle, StyledLink } from './MainMenu.styles'


const MainMenu = (props) => {
    
    const {setPath} = props
    return(
        <MainMenuStyle>
            <StyledLink onClick={() => setPath('/orders')} to="/dashboard/orders">Orders</StyledLink>
            <StyledLink onClick={() => setPath('/products')} to="/dashboard/products">Products</StyledLink>
            <StyledLink onClick={() => setPath('/suppliers')} to="/dashboard/suppliers">Suppliers</StyledLink>
            <StyledLink onClick={() => setPath('/clients')} to="/dashboard/clients">Clients</StyledLink>
            <StyledLink onClick={() => setPath('/staff')} to="/dashboard/staff">Staff</StyledLink>
        </MainMenuStyle>
    )
}

export default MainMenu