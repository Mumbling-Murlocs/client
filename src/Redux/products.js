


const productsCrud = (state, action) => {
    const { customAction, newlyCreated, all, updated, id } = action
    const {products} = state

    switch (customAction) {

        case 'create':
        
            return { ...state, products: [...products, newlyCreated] }


        case 'get_all':
            return { ...state, products: all }


        case 'update':
            let indexUpdate = state.products.findIndex(product => product._id === id)

            if (indexUpdate >= 0) {
                    const newProductsArray = [...state.products]
                    newProductsArray[indexUpdate] = updated

                    return { ...state, products: newProductsArray }
                }
                return state

     
        case 'delete':
            let indexDelete = state.products.findIndex(product => product._id == id)

            if (indexDelete >= 0) {
                const newProductsArray = [...state.products]
                newProductsArray.splice(indexDelete, 1)

                return { ...state, products: newProductsArray }
            }
            return state
    }
       
}
export default productsCrud