
import store from '../Redux/store'



const isTeacher = () => {
    if (localStorage.role === 'admin') {
        return true
    } else if (localStorage.role === 'teacher') {
        return true  
    }
    return null
}

const isAdmin = () => {
    if (localStorage.role === 'admin') {
        return true
    } 
    return null
}

const isOwner = (obj) => {
    if (localStorage.role === 'admin') {
        return true
    } else if (obj.userId === localStorage.userId) {
        return true
    }
    return null
}

const canDelete = (objId, checkId) => {
    if (localStorage.user.role === 'admin') {
        return true
    } else if (objId === checkId) {
        return true
    }
    return null
}

const isSupplier = () => {
    return store.getState().currentUser.company.accountType === 'supplier' ? true : false
}


export default { isTeacher, isOwner, isAdmin, canDelete, isSupplier}