import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles';
const { colors } = styleVariables


const TileBody = styled.div`
    display: flex;
    width: 350px;
    height: 150px;
    border-radius: 5px;
    background: ${colors.white};
    margin-right: 10px;
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

const CompanyName = styled.p`
    font-weight: bold;
    // font-size: 
    margin: 5px;
`
const CompanyType = styled.p`
    // color: grey;
    margin: 5px;
`
const CompanyAddress = styled.p`
    // color: grey;
    margin: 5px;
`
const Button = Default.Button.extend`
    position: absolute;
    bottom: 5%;
    left: 5%;
`
export {
    TileBody,
    TileIMG,
    TextBox,
    CompanyName,
    CompanyType,
    CompanyAddress,
    Button
}
