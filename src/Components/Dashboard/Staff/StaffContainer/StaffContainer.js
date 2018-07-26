// import React, {Component, Fragment} from 'react'
// import { Header, BodyWindow } from './StaffContainer.styles'
// import { Route } from 'react-router-dom'
// import NewStaff from '../NewStaff/NewStaff'
// import AllStaff from '../AllStaff/AllStaff'
// import store from '../../../../Redux/store'
// import helpers from '../../../../Helpers'


// const { api } = helpers

// class StaffContainer extends Component {

//     createStaff = (e) => {
//         e.preventDefault()
//         const form = e.target.elements
        
//         const newStaff = {
//             email: form.email.value,
//             password: form.password.value,
//             firstName: form.firstName && form.firstName.value,
//             lastName: form.lastName && form.lastName.value
//         }

//         // Replaced store.dispatch with this for our state updates and api requests
//         api.staff.create(newStaff, () => {
//             console.log('HIT FUNC()')
//         })
    
//     }

//     // componentDidMount () {
//         // Replaced store.dispatch with this for our state updates and api requests
//         // api.staff.all()
       
//     // }


//     render(){

//         const {staff} = store.getState()

//         return (
//             <Fragment>
//                 <Header>
                    
//                 </Header>
//                 <BodyWindow>
//                     {/* <Route exact path='/dashboard/staff' render={(rProps) => (
//                         <AllStaff {...rProps} staffArray={staff}  />
//                     )}  /> */}
//                     <Route path='/dashboard/staff/new' render={(rProps) => (
//                         <NewStaff {...rProps} onSubmit={this.createStaff} />
//                     )} />
//                 </BodyWindow>
//             </Fragment>
//         )
//     }
// }


import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { Header, BodyWindow } from './StaffContainer.styles'
import { setJwt } from '../../../../Api/init'
import StaffRegister from './StaffRegister'
import StaffLogin from './StaffLogin'
import store from '../../../../Redux/store'
import helpers from '../../../../Helpers'


const { api } = helpers




class StaffContainer extends Component {

    // These 'StoreStaff' functions are to set and retrieve data form localStorage in the staff browser
    get storeStaff() {
        return localStorage.staff && JSON.parse(localStorage.staff)
    }

    set storeStaff(staffDetails) {
        localStorage.setItem('staff', JSON.stringify(staffDetails))
    }

    // This authenticate function allows for both registration and sign in 
    authenticate = (e, url) => {
        e.preventDefault()
        const form = e.target.elements

        const newStaff = {
            email: form.email.value,
            password: form.password.value,
            firstName: form.firstName && form.firstName.value,
            lastName: form.lastName && form.lastName.value
        }

        api.staff.authenticate(newStaff, url, (registeredStaff) => {
            this.storeStaff = registeredStaff
            this.props.history.push('/dashboard')
        })

    }

    expiryCheck = () => {
        const staff = this.storeStaff
        const isExpired = staff && (staff.exp * 1000) - Date.now()
 
        if (isExpired >= 0) {
            setJwt(staff)
            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true,
                currentStaff: staff
            })
        } else {
            localStorage.removeItem('staff')
        }
    }

    componentWillMount() {
        this.expiryCheck()
    }


    render() {
        const {path} = this.props.match
        // console.log('THIS.PROPS IN AC', this.props)
        // console.log(path) 
        const {loginError} = store.getState()
        return(
            <Fragment>
                    {path === '/dashboard/staff/new' && <StaffRegister registerError={loginError} url={path} register={this.authenticate} />}
                    {/* {path === 'staffLogin' && <StaffLogin loginError={loginError} url={path} login={this.authenticate} />} */}
            </Fragment>
        )
    }
}

export default StaffContainer