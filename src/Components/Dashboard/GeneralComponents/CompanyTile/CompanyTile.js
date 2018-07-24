import React from 'react'
import { TileBody, TileIMG, TextBox, CompanyName, CompanyType, CompanyAddress, ButtonLink} from './CompanyTile.styles'

const CompanyTile = (props) => {

    const { company, viewSupplier } = props

    return (
        <TileBody key={company._id}>
                <TileIMG url={company.image}>
                </TileIMG>
                <TextBox>
                    <CompanyName>{company.name}</CompanyName>
                    <CompanyType>{company.businessType}</CompanyType>
                    <CompanyAddress>{company.address}</CompanyAddress>
                    <ButtonLink onClick={() => viewSupplier(company._id)} to={`/dashboard/suppliers/id/${company._id}`}>View Supplier</ButtonLink>
                   
                </TextBox>
        </TileBody>
    )

}

export default CompanyTile