import styled from 'styled-components'
import { styleVariables, Default } from '../../../../../Assets/Styles';
const { colors } = styleVariables

const Button = Default.Button.extend`
    margin-top: auto;
    text-align: center;
    padding: 0 auto;
    color: ${colors.white}
    background: ${colors.orange};
    border-color: ${colors.orange};
    height: 45px;
    width: 100%;
    &:hover {
        border-color: ${colors.lightOrange};
        background: ${colors.lightOrange};
    } 
`
const Name = styled.p`
    margin: 3px 0;
    font-weight: bold;
`
const P = styled.p`
    margin: 3px 0;
`

export default {

    Button,
    Name,
    P
}