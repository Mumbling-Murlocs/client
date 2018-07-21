import React, { Fragment } from 'react'
import Form from '../../UI/Form'
import FormField from '../../UI/FormField'
import { Center, Button } from './Auth.styles.js'



const CreateCompany = (props) => {
    // console.log(props)
    


    const title = "Lets setup your business huh?"     

    return (
        <Fragment>
            <Center>
                <Form onSubmit={(e) => props.createCompany(e)} title={title}>
                    <FormField label="Company Name" name="name" type="text"  />
                    <FormField label="ABN" name="abn" type="text"  />
                    <FormField label="What type of company do you run?" name="businessType" type="text"  />
                    <FormField label="Company Address" name="address" type="text"  />
                    <FormField label="Company Phone Number" name="phoneNumber" type="text"  />
                    
                    
                    <Button>Create your company</Button>
                   
                </Form>
            </Center>
        </Fragment>
    )
}

export default CreateCompany