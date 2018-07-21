
import { axiosApi, setJwt } from '../Api/init'
import decodeJWT from 'jwt-decode'
import store from '../Redux/store'


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
        const response = await axiosApi.post(this.endpoint, obj)

         store.dispatch({
            type: this.endpoint,
            customAction: 'create',
            newlyCreated: response.data
        })

        func(response.data)
    }

// CRUD - READ-ALL
    all = async (func) => {
        const response = await axiosApi.get(this.endpoint)

        store.dispatch({
            type: this.endpoint,
            customAction: 'get_all',
            all: response.data
        })

        func(response.data)
    }

 // CRUD - READ-SINGLE (findById)
    // find = async (id) => {
    //     const object = await axiosApi.get(this.endpoint + `/${id}`)
    //     return object
    // }

 // CRUD - UPDATE
    update = async (id, obj, func) => {
        // The middle paramater here passed as "obj" are the fields that are being updated.
        try {
            func = func || null
            
            const response = await axiosApi.put(this.endpoint + `/${id}`, obj)
            console.log(response)
    
            store.dispatch({
                type: this.endpoint,
                customAction: 'update',
                updated: response.data, 
                id: id
            })
    
            func()

        } catch (error) {
            console.log(error.response)
        }
    }

// CRUD - DESTROY
    destroy = (id, authorized, func) => {
        // The middle paramater here passes the objects "ownership" id... Consider it as a foreign key e.g. user_id
        func = func || null

        axiosApi.delete(this.endpoint + `/${id}`, {data: { id: authorized.userId }})  
        
        store.dispatch({
            type: this.endpoint,
            customAction: 'delete',
            id: id
        })

        func()
    }

    authenticate = async (newUser, url, func) => {
        try {
            console.log(newUser)

            const response = await axiosApi.post(`/users${url}`, newUser)

            const token = response.data.token
            const user = token && decodeJWT(token)
            user.token = token

            setJwt(user)

            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true,
                currentUser: user
            })

            func(user)

          
        } catch (error) {
            store.dispatch({
                type: 'set_loginError',
                loginError: error.response.data
            })
        }

    }
    
}


const orders = new ApiMethods('/orders')
const products = new ApiMethods('/products')
const company = new ApiMethods('/company')
const user = new ApiMethods('/users')
// const products = new ApiMethods('http://localhost:3001/delivery-day')


export default { orders, products, company, user }
