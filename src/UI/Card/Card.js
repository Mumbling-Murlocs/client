import React from 'react'
import Style from './Card.styles'

const Card = (props) => {

    const { key, imgURL, width, margin, height } = props

    return (
        <Style.Body height={height} width={width} margin={margin} key={key}>
                <Style.IMG url={imgURL}>
                </Style.IMG>
                <Style.TextBox>
                    {props.children}
                </Style.TextBox>
        </Style.Body>
    )

}

export default Card