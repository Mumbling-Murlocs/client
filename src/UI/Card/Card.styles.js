import styled from 'styled-components'
import { styleVariables, Default } from '../../Assets/Styles';
const { colors } = styleVariables


const Body = styled.div`
    display: flex;
    width: ${props => props.width ? props.width : '350px'};
    height: ${props => props.height ? props.height : '150px'};
    border-radius: 5px;
    background: ${colors.white};
    margin-right: ${props => props.margin ? props.margin : '30px'};
    margin-top: ${props => props.margin ? props.margin : '30px'};
`
const IMG = Default.Image.extend`
    width: 150px;
    height: 100%;
    border-radius: 5px 0 0 5px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 200px;
    padding: 10px;
    position: relative;
`

export default {
    Body,
    IMG,
    TextBox
}
