import React, { Fragment } from 'react'
import Form from '../../UI/Form'
import FormField from '../../UI/FormField'
import { Center, Button, AddressBox, AdressContain } from './Auth.styles.js'



const CreateCompany = (props) => {
    // console.log(props)
    


    const title = "Lets setup your business huh?"     

    return (
        <Fragment>
            <Center>
                <Form onSubmit={(e) => props.createCompany(e)} title={title}>
                    <FormField label="Company Name" name="name" type="text"  />
                    <FormField label="ABN" name="abn" type="text"  />
                    <FormField label="What type of company do you run?" name="companyType" type="text"  />
                    <FormField label="Address Line 1" name="lineOne" type="text"  />
                    <FormField label="City/Suburb" name="city" type="text"  />
                    <AddressBox>
                        <AdressContain>
                            <FormField label="Country" name="country" type="text"  />
                        </AdressContain>
                        <AdressContain>
                            <FormField label="Postcode" name="postcode" type="text"  />
                        </AdressContain>
                    </AddressBox>
                    <FormField label="Company Phone Number" name="phoneNumber" type="text"  />
                    
                    
                    <Button>Create your company</Button>
                   
                </Form>
            </Center>
        </Fragment>
    )
}

export default CreateCompany