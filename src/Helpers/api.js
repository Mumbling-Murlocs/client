
import { axiosApi } from '../Api/init'


// This class is a helper method that is useable by all the different components in sending api requests to the backend. It is adaptable to each model endpoint by creating a new instance of the class object and initialising it with the endpoint that relates the endpoint you want to call on. It operates on all CRUD options. 

// Some of the functions can be passed promises that are then executed once the api request is finished.
class ApiMethods {
    // Initializes the endpoint
    constructor(endpoint) {
        this.endpoint = endpoint
    }

// CRUD - CREATE
    create = async (obj, func) => {
        // "obj" is the new object you are creating
        func = func || null

        return axiosApi.post(
            this.endpoint, obj
        )
    }

// CRUD - READ-ALL
    all = async () => {
        const array = await axiosApi.get(this.endpoint)
        return array
    }

 // CRUD - READ-SINGLE (findById)
    find = async (id) => {
        const object = await axiosApi.get(this.endpoint + id)
        return object
    }

 // CRUD - UPDATE
    update = (id, obj, func) => {
        // The middle paramater here passed as "obj" are the fields that are being updated.
        func = func || null
        
        axiosApi.put(
            this.endpoint + id, obj
        ).then(func)
    }

// CRUD - DESTROY
    delete = (id, authorized, func) => {
        // The middle paramater here passes the objects "ownership" id... Consider it as a foreign key e.g. user_id
        func = func || null

        axiosApi.delete(
            this.endpoint + id, {
                data: { id: authorized.userId }
            }
        ).then(func)       

    }
}


const orders = new ApiMethods('/orders')
const products = new ApiMethods('/products')
const company = new ApiMethods('/company')
// const products = new ApiMethods('http://localhost:3001/delivery-day')


export default { orders, products }
