import { Default, styleVariables } from '../../../../../Assets/Styles'
import styled from 'styled-components'
const { colors } = styleVariables


const SupplierPanel = Default.Panel.extend`
    background-color: ${colors.white};
    display: block;
`
const Name = styled.p`
    margin: 3px 0;
    font-weight: bold;
`
const P = styled.p`
    margin: 3px 0;
`

export default {
    SupplierPanel,
    Name,
    P

}