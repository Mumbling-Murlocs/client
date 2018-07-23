import React from 'react'
import NewProduct from './NewProduct'
import renderer from 'react-test-renderer'



describe('NewProduct', () => {
    it('Should render the way we expect', () => {


        const tree = renderer.create(
                <NewProduct onSubmit={() => {}} />
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
