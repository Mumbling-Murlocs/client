import React, {Component} from 'react'
import MainMenu from '../MainMenu/MainMenu'
import SubMenu from '../SubMenu/SubMenu'
import store from '../../../../Redux/store'
import { SideBarLayout } from './Menu.styles'

class MenuContainer extends Component {
    setPath = (url) => {
        console.log(url)
        store.dispatch({
            type: 'set_path',
            path: url
        })
    } 

    render(){
        return(
            <SideBarLayout>
                <MainMenu setPath={this.setPath} />
                <SubMenu />
            </SideBarLayout>
        )

    }

}


export default MenuContainer
