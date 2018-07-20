import React from 'react'
import MainMenu from '../MainMenu/MainMenu'
import SubMenu from '../SubMenu/SubMenu'
import { SideBarLayout } from './Menu.styles'

const MenuContainer = (props) => {
    return(
        <SideBarLayout>
            <MainMenu />
            <SubMenu />
        </SideBarLayout>
    )
}


export default MenuContainer
