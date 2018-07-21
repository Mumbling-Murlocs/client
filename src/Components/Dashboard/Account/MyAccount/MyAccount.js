import React from 'react'
import AccountProfile from '../AccountProfile/AccountProfile'
import {MainPanel, Body, Panel} from './MyAccount.styles'

const MyAccount = (props) => {

    return(
        <Body>
            <MainPanel>
                <Panel>
                    <AccountProfile />

                </Panel>

                <Panel>

                </Panel>
               
            </MainPanel>
        </Body>
    )
}

export default MyAccount
