import helpers from '../Helpers'


const {api} = helpers


const companyCrud = (state, action) => {
    const { customAction, newCompany, editedCompany, companyId, companyOwnerId } = action
    const { currentUser } = state

    switch (customAction) {

        case 'create':
        
            return { ...state, currentUser: {...currentUser, company: api.company.create(newCompany)} }



        case 'update':
       
            return  api.company.update(companyId, editedCompany, () => {

                return { ...state, currentUser: { ...currentUser, company: editedCompany } }

            })
     


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