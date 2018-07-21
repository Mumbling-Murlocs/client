
import helpers from '../Helpers'
import store from './store'
const {api} = helpers

jest.mock('../Helpers/api')

describe('Crud and store operations on products', () => {
    it('Can create products', () => {
        let newProduct = { name: 'blah', price: 4.50, description: 'Blah blah' }

        api.products.create(newProduct)
       
        expect(store.getState().products[0]).toEqual(newProduct)
        expect(store.getState().products[0]._id).toEqual('3')

    })

    it('Can retrieve an array of all products', () => {

        api.products.all()

        expect(store.getState().products.length).toEqual(3)
    })

    it('Can edit a product', () => {
        let editedProduct = { _id: '1', name: 'foo', price: 4.50, description: 'Product1 description' }

        api.products.update(editedProduct._id, editedProduct)

        expect(store.getState().products[0].name).toEqual('foo')
      

    })

    it('Can delete a product', () => {
       api.products.delete(1)
        // console.log(store.getState())
       



        expect(store.getState().products.length).toEqual(2)


    })
    
})