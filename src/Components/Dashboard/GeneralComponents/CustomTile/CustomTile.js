import React from 'react'
import { TileBody, TileIMG, TextBox } from './CustomTile.styles'

const CompanyTile = (props) => {

    const { key, imgURL, width, margin, height } = props

    return (
        <TileBody height={height} width={width} margin={margin} key={key}>
                <TileIMG url={imgURL}>
                </TileIMG>
                <TextBox>
                    {props.children}
                </TextBox>
        </TileBody>
    )

}

export default CompanyTile