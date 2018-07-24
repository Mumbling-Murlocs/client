import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles'
const { colors } = styleVariables

export default {

    Body: Default.Body.extend`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
   `,
    MainPanelSupplier: Default.Panel.extend`
        height: 95%;
        width: 35%;
   `,
   
    PanelContainer: Default.Panel.extend`
        position: relative;
        display: block;
        height: 100%;
        width: 100%;
   `,
    
    Panel: Default.Panel.extend`
        background: ${colors.white};
        height: 95%;
        width: 100%;
        justify-content: flex-start;
        flex-direction: column;
   `,
    PanelTitle: styled.h3`
        margin: 0;
        height: 5%;
   `,
    SupplierIMG: Default.Image.extend`
        width: 100%;
        height: 40%;
        border-radius: 5px 0 0 5px;
   `,
    Details: styled.p`
        margin: 5px 0;
   `,
   
    AddButton: Default.Button.extend`
        position: absolute;
        bottom: 2.5%;
        left: 5%;
   `,
   
    OrderButton: Default.Button.extend`
        position: absolute;
        bottom: 2.5%;
        left: 60%;
   `
}
