import { styleVariables } from '../../Assets/Styles';
import styled from 'styled-components';

const {colors} = styleVariables

const Label = styled.label`
    width: 100%;
    margin-bottom: 5px;
    font-weight: bold;
    color: ${colors.primary};
    font-size: 0.8rem;
`
const Input = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid ${colors.primary};
    // border-bottom: 1px solid rgb(40, 112, 153);
    width: 100%;
    background: ${colors.white};
    box-sizing: border-box;
    color: ${colors.primary};
    
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
        -webkit-transition-delay: 9999s;
        -webkit-text-fill-color: ${colors.primary};
    }
    // &:-webkit-autofill {
    //     -webkit-box-shadow: 0 0 0 30px #ffffff inset;
    //     color: black;
    // }

    & span {
        font-style: italic
    }
`


export default {
    Input,
    Label
}