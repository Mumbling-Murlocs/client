import styled from 'styled-components'
import { styleVariables } from '../../../../Assets/Styles';
import { Link } from 'react-router-dom'
const { colors } = styleVariables


const MainMenuStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: ${colors.dark};
    color: ${colors.white};
    z-index: 100;
    padding-top: 100px;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    padding: 10px 0;
    font-weight: bold;

    &:visited {
        color: ${colors.white};
    }
`

export { 
    MainMenuStyle,
    StyledLink
 } 
