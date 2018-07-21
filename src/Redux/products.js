import helpers from '../Helpers'


const {api} = helpers


const productsCrud = (state, action) => {
    const { customAction, newProduct, editedProduct, productId, productOwnerId } = action
    const {products} = state

    switch (customAction) {

        case 'create':
        
            return { ...state, products: [...products, api.products.create(newProduct)] }


        case 'get_all':
            return { ...state, products: api.products.all() }


        case 'update':
       
            return  api.products.update(productId, editedProduct, () => {
                const index = state.products.findIndex(product => product._id === productId)
                
                if (index >= 0) {
                    const newProductsArray = [...state.products]
                    newProductsArray[index] = editedProduct
                    
                    return {...state, products: newProductsArray}
                }
                return state
            })
     


        case 'delete':

            return api.products.destroy(productId, productOwnerId, () => {
                const index = state.products.findIndex(product => product._id == productId)

                if(index >= 0) {
                    const newProductsArray = [...state.products]
                    newProductsArray.splice(index, 1)

                    return { ...state, products: newProductsArray }
                }
                return state
            })  
    }
       
}
export default productsCrud