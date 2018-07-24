import styled from 'styled-components'
import { styleVariables, Default } from '../../../../../Assets/Styles'
const { colors } = styleVariables


const TileBody = styled.div`
    display: flex;
    width: 350px;
    height: 200px;
    border-radius: 5px;
    background: ${colors.white};
    margin-right: 20px;
    margin-top: 20px;
`
const TileIMG = Default.Image.extend`
    width: 150px;
    height: 100%;
    border-radius: 5px 0 0 5px;
`
const TextBox = styled.div`
    height: 100%;
    width: 200px;
    padding: 10px;
    position: relative;
`

const ProductName = styled.p`
    font-weight: bold;
    // font-size: 
    margin: 5px;
`
const ProductStockQty = styled.p`
    // color: grey;
    font-size: 12px;
    margin: 5px;
`

const ProductPrice = styled.p`
    // color: grey;
    font-weight: bold;
    font-size: 16px;
    margin: 5px;
`

const ProductCompanyId = styled.p`
    // color: grey;
    font-size: 12px;
    margin: 5px;
`
const ProductProductId = styled.p`
    // color: grey;
    font-size: 12px;,
    margin: 5px;
`
const ProductDescription = styled.p`
    // color: grey;
    margin: 5px;
`

const DeleteButton = Default.Button.extend`
    margin: 0 5px;
`
const EditButton = Default.Button.extend`
    margin: 0 5px;
`

const ButtonBox = styled.div`
display: flex;
position: absolute;
bottom: 5%;
width: 100%;
`

export {
    TileBody,
    TileIMG,
    TextBox,
    ProductName,
    ProductStockQty,
    ProductPrice,
    ProductCompanyId,
    ProductProductId,
    ProductDescription,
    EditButton,
    DeleteButton,
    ButtonBox
}
