import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles'
const { colors } = styleVariables



const Header = Default.Header.extend`
    display: flex;
    justify-content: center;
    align-items: center;
`
const BodyWindow = Default.Window.extend`
`

export {
    Header,
    BodyWindow
}