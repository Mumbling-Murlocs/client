
class ApiMethods {

    // Initializes the endpoint
    constructor(endpoint) {
        this.endpoint = endpoint
    }

     create =  (obj, func) => {
        // "obj" is the new object you are creating
        obj._id = '3'
        return obj
    }

    // CRUD - READ-ALL
     all =  () => {
         let product1 = { _id: '1', name: 'product1', price: 4.50, description: 'Product1 description' }
         let product2 = { _id: '2', name: 'product2', price: 4.50, description: 'Product2 description' }
         let newProduct = { _id: '3', name: 'blah', price: 4.50, description: 'Blah blah' }

        const array = [product1, product2, newProduct]
        return array
    }

    // // CRUD - READ-SINGLE (findById)
    //  find =  (id) => {
    //     const object = await axiosApi.get(this.endpoint + id)
    //     return object
    // }

    // // CRUD - UPDATE
     update = (id, obj, func) => {
        // The middle paramater here passed as "obj" are the fields that are being updated.
        // func = func || null

        // axiosApi.put(
        //     this.endpoint + id, obj
        // ).then(func)
        return func()
    }

    // CRUD - DESTROY
     delete = (id, authorized, func) => {
        // The middle paramater here passes the objects "ownership" id... Consider it as a foreign key e.g. user_id
        // func = func || null

        // axiosApi.delete(
        //     this.endpoint + id, {
        //         data: { id: authorized.userId }
        //     }
        // ).then(func)
         return func()
    }
}

const products = new ApiMethods('/products')

export default {products}
