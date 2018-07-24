import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles'
const { colors } = styleVariables


const Body = Default.Body.extend`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px;

`
const MainPanelSupplier = Default.Panel.extend`
        height: 95%;
        width: 35%;
`
const MainPanelCatelogue = Default.Panel.extend`
        display: block;
        overflow: hidden;
        height: 95%;
        width: 55%;
`
const PanelContainer = Default.Panel.extend`
    position: relative;
   display: block;
   height: 100%;
   width: 100%;
`
const CatelogueContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   align-content: flex-start;
   flex-wrap: wrap;
   padding: 10px;
   height: 95%;
   width: 100%;
   overflow-y: scroll;
`
const Panel = Default.Panel.extend`
   background: ${colors.white};
   height: 95%;
   width: 100%;
   justify-content: flex-start;
   flex-direction: column;
`
const PanelTitle = styled.h3`
    margin: 0;
    height: 5%;
`

const SupplierIMG = Default.Image.extend`
    width: 100%;
    height: 40%;
    border-radius: 5px 0 0 5px;
`
const Details = styled.p`
    margin: 5px 0;
`

const AddButton = Default.Button.extend`
    position: absolute;
    bottom: 2.5%;
    left: 5%;
`

const OrderButton = Default.Button.extend`
    position: absolute;
    bottom: 2.5%;
    left: 60%;
`

export {
    Body,
    MainPanelSupplier,
    MainPanelCatelogue,
    PanelContainer,
    Panel,
    PanelTitle,
    SupplierIMG,
    Details,
    AddButton,
    OrderButton,
    CatelogueContainer
}
