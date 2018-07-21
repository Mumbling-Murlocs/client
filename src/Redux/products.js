import helpers from '../Helpers'


const {api} = helpers


const productsCrud = (state, action) => {
    const { customAction, newlyCreated, all, updated, id } = action
    const {products} = state

    switch (customAction) {

        case 'create':
        
            return { ...state, products: [...products, newlyCreated] }


        case 'get_all':
            return { ...state, products: all }


        case 'update':
                let index = state.products.findIndex(product => product._id === id)

                if (index >= 0) {
                    const newProductsArray = [...state.products]
                    newProductsArray[index] = updated

                    return { ...state, products: newProductsArray }
                }
                return state

     
        case 'delete':
             index = state.products.findIndex(product => product._id == id)

            if (index >= 0) {
                const newProductsArray = [...state.products]
                newProductsArray.splice(index, 1)

                return { ...state, products: newProductsArray }
            }
            return state
    }
       
}
export default productsCrud