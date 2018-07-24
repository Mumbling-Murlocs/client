import { styleVariables, Default } from '../../Assets/Styles';
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
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    // background: ${colors.primary}
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
const AddressBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const AdressContain = styled.div`
    width: 45%;
`

export {
    StyledLink,
    ErrorMessage,
    Center,
    Button,
    AddressBox,
    AdressContain
}

