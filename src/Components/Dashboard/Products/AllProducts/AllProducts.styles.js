import styled from 'styled-components'
import { Default, styleVariables } from '../../../../Assets/Styles'
const {colors} = styleVariables

const Tag = {
    MainPanel: Default.Panel.extend`
        width: 90%;
        height: 90%;
        justify-content: center;

        overflow: hidden;
        position: relative;
    `,
    Body: Default.Body.extend`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    PanelContainer: Default.Panel.extend`
        width: 100%;
        height: 100%;

        display: block;
        overflow: hidden;
        position: absolute;

    `,
    HeadPanel: Default.Panel.extend`
    background: ${colors.white};
  
    width: 100%;
    height: 10%;
    margin-bottom: 10px;
    `,
    ProductPanel: Default.Panel.extend`
    background: ${colors.white};
 
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    `,
    PanelTitle: styled.h3`
        margin: 0;
        height: 5%;
    `,
    Products: styled.div`
         overflow-y: scroll;
         height: 87.5%;
    `,
    Row: styled.div`
        width: 100%;
        display: flex;
   
   `,
   Col: styled.div`
        width: ${props => props.width? props.with : '20%'};
        padding: 10px;
        // border: 1px solid black;
        
   `,
   Img: Default.Image.extend`
        width: 150px;
        padding: 10px;
   `

}

export default Tag