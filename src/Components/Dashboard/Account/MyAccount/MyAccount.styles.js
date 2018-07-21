import styled from 'styled-components'
import { styleVariables } from '../../../../Assets/Styles'
import { Default } from '../../../../Assets/Styles'
const { colors } = styleVariables

const MainPanel = Default.Panel.extend`
    width: 90%;
    height: 90%;
    justify-content: space-between;
    align-items: space-between;
    flex-wrap: wrap;
`
const Body = Default.Body.extend`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PanelContainer = Default.Panel.extend`
   display: block;
   height: 100%;
   width: 49.5%;
`
const Panel = Default.Panel.extend`
   background: ${colors.white};
   height: 95%;
   width: 100%;
`
const PanelTitle = styled.h3`
    margin: 0;
    height: 5%;
`

export {
    MainPanel,
    Body,
    Panel,
    PanelContainer,
    PanelTitle
}
