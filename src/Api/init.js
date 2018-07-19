import axios from 'axios'


// Create an axios instance
const axiosApi = axios.create({
    baseURL: 'http://localhost:3001' // API server
})

// Add the bearer token to the axios instance
// Axios will then add this header with every subsequent request
const setJwt = (token) => {
    console.log(token)
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token.token}`
    axiosApi.defaults.headers.common['user'] = token.tokenDetails
}

// TODO

const setObjId = (id) => {
    
}



export { axiosApi, setJwt }
