


const userCrud = (state, action) => {
    const { customAction, newUser, updatedUser, userId } = action
    

    switch (customAction) {


    


        // case 'get_all':
        //     return { ...state, products: api.products.all() }


        case 'update':

            

            return state



        // case 'delete':

        //     return api.products.destroy(productId, productOwnerId, () => {
        //         const index = state.products.findIndex(product => product._id == productId)

        //         if (index >= 0) {
        //             const newProductsArray = [...state.products]
        //             newProductsArray.splice(index, 1)

        //             return { ...state, products: newProductsArray }
        //         }
        //         return state
        //     })
        default:
            console.log(`Redux: Custom Action not recognized: ${action.customAction}`)
            return state
    }

}
export default userCrud