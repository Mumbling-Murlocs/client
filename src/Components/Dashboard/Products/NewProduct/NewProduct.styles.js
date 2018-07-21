import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles';
const { colors } = styleVariables

const Body = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    Body,
    Button
}
