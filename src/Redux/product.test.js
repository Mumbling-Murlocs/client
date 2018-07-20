import products from './products'
import store from './store'

jest.mock('../Helpers/api')

describe('Crud and store operations on products', () => {
    it('Can create products', () => {
        let newProduct = { name: 'blah', price: 4.50, description: 'Blah blah' }

        store.dispatch({
            type: 'products',
            customAction: 'create',
            newProduct: newProduct
        })
       
        expect(store.getState().products[0]).toEqual(newProduct)
        expect(store.getState().products[0]._id).toEqual('3')

    })

    it('Can retrieve an array of all products', () => {

        store.dispatch({
            type: 'products',
            customAction: 'get_all'
        })

        expect(store.getState().products.length).toEqual(3)
    })

    it('Can edit a product', () => {
        store.dispatch({
            type: 'products',
            customAction: 'get_all'
        })
        // console.log(store.getState())
        let editedProduct = { _id: '1', name: 'foo', price: 4.50, description: 'Product1 description' }


        store.dispatch({
            type: 'products',
            customAction: 'update',
            editedProduct: editedProduct,
            productId: editedProduct._id
        })

        expect(store.getState().products[0].name).toEqual('foo')
      

    })

    it('Can delete a product', () => {
        store.dispatch({
            type: 'products',
            customAction: 'get_all'
        })
        // console.log(store.getState())
       


       store.dispatch({
            type: 'products',
            customAction: 'delete',
            productId: 1
        })

        expect(store.getState().products.length).toEqual(2)


    })
    
})