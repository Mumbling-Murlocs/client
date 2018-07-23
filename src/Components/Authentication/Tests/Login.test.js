import React from 'react'
import Login from '../Login'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
import localStorage from '../../../localStorage'

window.localStorage = localStorage

describe('Login', () => {
    it('Should render the way we expect', () => {
        
        
        const tree = renderer.create(
            <Router>
                <Login registerError='something' register='something' url='something' />
            </Router>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
