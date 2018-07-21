import helpers from '../Helpers'


const {api} = helpers


const companyCrud = (state, action) => {
    const { customAction, newlyCreated, all, updated, id } = action
    const { currentUser } = state

    switch (customAction) {

        case 'create':
        
            return { ...state, currentUser: {...currentUser, company: newlyCreated } }


        case 'update':
       
            return { ...state, currentUser: { ...currentUser, company: updated } }

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
    }
       
}
export default companyCrud