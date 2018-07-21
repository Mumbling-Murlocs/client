import React from 'react'
import AccountProfile from '../AccountProfile/AccountProfile'
import { MainPanel, Body, Panel, PanelContainer, PanelTitle} from './MyAccount.styles'

const MyAccount = (props) => {

    return(
        <Body>
            <MainPanel>
                <PanelContainer>
                    <PanelTitle>Profile</PanelTitle>
                    <Panel>
                        <AccountProfile upgradeAccount={props.upgradeAccount} />

                    </Panel>
                </PanelContainer>

                <PanelContainer>
                    <PanelTitle>Activity</PanelTitle>
                    <Panel>

                    </Panel>
                </PanelContainer>

               
            </MainPanel>
        </Body>
    )
}

export default MyAccount
