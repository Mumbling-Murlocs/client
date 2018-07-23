import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles';
const { colors } = styleVariables


const Body = Default.Body.extend`
    display: flex;
    justif-content: flex-start;
    flex-wrap: wrap;
    padding: 10px;
`

export {
    Body
}
