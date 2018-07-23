import React from 'react'
import CreateCompany from '../CreateCompany'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'
// import localStorage from '../../localStorage'

// window.localStorage = localStorage

describe('CreateCompany', () => {
    it('Should render the way we expect', () => {
        
        
        const tree = renderer.create(
            <Router>
                <CreateCompany registerError='something' register='something' url='something' />
            </Router>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
