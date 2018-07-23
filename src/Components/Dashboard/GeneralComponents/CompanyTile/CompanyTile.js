import React from 'react'
import {TileBody, TileIMG, TextBox, CompanyName, CompanyType, CompanyAddress, Button} from './CompanyTile.styles'

const CompanyTile = (props) => {

    const { company } = props

    return (
        <TileBody>
                <TileIMG url={company.image}>
                </TileIMG>
                <TextBox>
                    <CompanyName>{company.name}</CompanyName>
                    <CompanyType>{company.businessType}</CompanyType>
                    <CompanyAddress>{company.address}</CompanyAddress>
                    <Button>View Supplier</Button>
                </TextBox>
        </TileBody>
    )

}

export default CompanyTile