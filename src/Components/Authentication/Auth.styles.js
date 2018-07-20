import { styleVariables } from '../../Assets/Styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const { colors } = styleVariables


const StyledLink = styled(Link)`
    margin-top: 10px;
    color: ${colors.primary};

    &:visted{
        color: ${colors.primary};
    }
`

const ErrorMessage = styled.p`
    text-align: center;
    margin: 0;
    color: rgb(240, 70, 70);
    margin-bottom: 10px;
`

export default {
    StyledLink,
    ErrorMessage
}

