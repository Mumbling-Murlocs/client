

const companyCrud = (state, action) => {
    const { customAction, newlyCreated, all, updated, activeSupplier } = action
    const { currentUser } = state

    switch (customAction) {

        case 'create':
        
            return { ...state, currentUser: {...currentUser, company: newlyCreated } }


        case 'update':
       
            return { ...state, currentUser: { ...currentUser, company: updated } }

        case 'all_suppliers':
            const suppliers = all.filter(supplier => supplier.accountType === 'supplier')
            
            return { ...state, suppliers: suppliers }

        case 'set_active_supplier':
            // const suppliers = all.filter(supplier => supplier.accountType === 'supplier')

            return { ...state, activeSupplier }

        // case 'delete':

        //     return api.company.delete(companyId, companyOwnerId, () => {
        //         const index = state.company.findIndex(company => company._id == companyId)

        //         if(index >= 0) {
        //             const newcompanyArray = [...state.company]
        //             newcompanyArray.splice(index, 1)

        //             return { ...state, company: newcompanyArray }
        //         }
        //         return state
        //     })  
        default:
            console.log(`Redux: Action not recognized: ${action.customAction}`)
            return state

    }
       
}
export default companyCrud