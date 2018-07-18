import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import MenuContainer from './Menu/MenuContainer';
import {variables} from '../../Assets/Styles';

const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 92.5%;
    background: ${variables.colors.primary};
`

const TopbarLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 7.5%;
    // background: ${variables.colors.primary};
`


const AppName = styled.div`
    background: ${variables.colors.primary};
`

const SidePanel = styled.div`
    background: ${variables.colors.dark};
`

class Dashboard extends Component {

    render(){
        return(
            <Fragment>
                <TopbarLayout>
                    <AppName>

                    </AppName>
                </TopbarLayout>
                <DashboardLayout>
                    <SidePanel>
                        <MenuContainer/>
                    </SidePanel>
                    <div></div>
                </DashboardLayout>
            </Fragment>
        )
    }

}

export default Dashboard
