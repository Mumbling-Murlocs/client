import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles';
const { colors } = styleVariables



const staffDisplay = styled.div`
    width: 100%;
`
const Body = Default.Body.extend` 

`

const ErrorMessage = styled.p`
    text-align: center;
    margin: 0;
    color: rgb(240, 70, 70);
    margin-bottom: 10px;
`
const Button = Default.Button.extend`
    border: 2px solid #E49D39;
    color: #ffffff;
    background: #E49D39;
    width: 100%
    &:hover {
        color: white;
        background: rgb(214, 139, 33);
        border: 2px solid rgb(214, 139, 33);
    }
`

export {
    staffDisplay,
    Body,
    ErrorMessage,
    Button
}
