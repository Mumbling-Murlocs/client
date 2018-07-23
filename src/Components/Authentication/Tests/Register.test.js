import React from 'react'
import Register from '../Register'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
// import localStorage from '../../localStorage'

// window.localStorage = localStorage

describe('Register', () => {
    it('Should render the way we expect', () => {
        
        
        const tree = renderer.create(
            <Router>
                <Register registerError='something' register='something' url='something' />
            </Router>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
