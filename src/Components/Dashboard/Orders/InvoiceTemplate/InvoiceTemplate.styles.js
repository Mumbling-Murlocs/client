import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles';
const { colors } = styleVariables

const Panel = Default.Panel.extend`
   background: ${colors.white};
   height: 95%;
   width: 100%;
`

const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30%;

`
const AdressContainer = styled.div`
    height: 100%;
    width: 40%;
`

const Address = styled.div`
    text: text-wrap;
    margin: 2px 0;
    padding-left: 30px;
`

export default {
    Panel,
    HeadingContainer,
    AdressContainer,
    Address
}