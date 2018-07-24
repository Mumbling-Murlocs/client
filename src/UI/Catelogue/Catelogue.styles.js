import styled from 'styled-components'
import {styleVariables, Default} from '../../Assets/Styles'
const {colors} = styleVariables


export default {
    MainPanelCatelogue: Default.Panel.extend`
        display: block;
        overflow: hidden;
        position: relative;
        height: 95%;
        width: ${props => props.width ? props.width : '55%'};
        padding: ${props => props.padding ? props.padding : '10px'};
   `,
    CatelogueContainer: styled.div`
        display: block;
        position: absolute;
        padding: 10px;
        height: 95%;
        width: 96%;
        overflow: hidden;
        padding: ${props => props.padding ? props.padding : '10px'};

   `,
    ProductPanel: Default.Panel.extend`
        background: ${colors.white};
        width: 100%;
        height: 150px;
        margin-bottom: 10px;
    `,
    HeadPanel: Default.Panel.extend`
    background: ${colors.white};
  
    width: 100%;
    height: 12%;
    margin-bottom: 10px;
    `,
    PanelTitle: styled.h3`
        margin: 0;
        height: 5%;
   `,
    Products: styled.div`
        overflow-y: scroll;
        height: 100%;
   `,
    Row: styled.div`
        width: 100%;
        display: flex;
   `,
    Col: styled.div`
        width: ${props => props.width ? props.with : '20%'};
        padding: 10px;
        word-wrap: normal;
        // border: 1px solid black;
   `,
    Img: Default.Image.extend`
        width: 150px;
        padding: 10px;
    `
}
