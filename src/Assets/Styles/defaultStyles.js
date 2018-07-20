import styled from 'styled-components'
import styleVariables from './styleVariables'
import { Link } from 'react-router-dom'

const { colors } = styleVariables

const StyledLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    padding: 10px 0;
    font-weight: bold;

    &:visited {
        color: ${colors.white};
    }
    // &:active {
    //     color: orange;
    // }
`

export default {
    StyledLink
}