import React from 'react'
import AuthenticationContainer from '../AuthenticationContainer'
import renderer from 'react-test-renderer'
import localStorage from '../../../localStorage'

window.localStorage = localStorage

describe('AuthenticationContainer', () => {
    it.skip('Should render the way we expect', () => {
        const rProps = {match:  {path: '/register'}}
        console.log( 'IN SNAPSHOT',  rProps)
        const tree = renderer.create(
            <AuthenticationContainer {...rProps} />
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})

