import React, {Component, Fragment} from 'react'
import { Header, BodyWindow } from './StaffContainer.styles'
import { Route } from 'react-router-dom'
import NewStaff from '../NewStaff/NewStaff'
import AllStaff from '../AllStaff/AllStaff'
import store from '../../../../Redux/store'
import helpers from '../../../../Helpers'


const { api } = helpers

class StaffContainer extends Component {

    createStaff = (e) => {
        e.preventDefault()
        const form = e.target.elements
        
        const newStaff = {
            email: form.email.value,
            password: form.password.value,
            firstName: form.firstName && form.firstName.value,
            lastName: form.lastName && form.lastName.value
        }

        // Replaced store.dispatch with this for our state updates and api requests
        api.staff.create(newStaff, () => {
            console.log('HIT FUNC()')
        })
    
    }

    // componentDidMount () {
        // Replaced store.dispatch with this for our state updates and api requests
        // api.staff.all()
       
    // }


    render(){

        const {staff} = store.getState()

        return (
            <Fragment>
                <Header>
                    
                </Header>
                <BodyWindow>
                    {/* <Route exact path='/dashboard/staff' render={(rProps) => (
                        <AllStaff {...rProps} staffArray={staff}  />
                    )}  /> */}
                    <Route path='/dashboard/staff/new' render={(rProps) => (
                        <NewStaff {...rProps} onSubmit={this.createStaff} />
                    )} />
                </BodyWindow>
            </Fragment>
        )
    }
}


export default StaffContainer
