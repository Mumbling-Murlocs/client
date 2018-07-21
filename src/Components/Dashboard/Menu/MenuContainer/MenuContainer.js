import React, {Component} from 'react'
import MainMenu from '../MainMenu/MainMenu'
import SubMenu from '../SubMenu/SubMenu'
import store from '../../../../Redux/store'
import { SideBarLayout } from './Menu.styles'
import { axiosApi } from '../../../../Api/init'

class MenuContainer extends Component {
    setPath = (url) => {
        console.log(url)
        store.dispatch({
            type: 'set_path',
            path: url
        })
    } 

    signOut = () => {
        axiosApi.get('/users/logout').then(() => {
            localStorage.removeItem('user')

            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: false,
                currentUser: null
            })
        })
    }

    render(){
        return(
            <SideBarLayout>
                <MainMenu signOut={this.signOut} setPath={this.setPath} />
                <SubMenu />
            </SideBarLayout>
        )

    }

}


export default MenuContainer
