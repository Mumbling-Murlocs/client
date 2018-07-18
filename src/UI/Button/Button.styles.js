// import { variables } from '../../Assets/Styles';
import styled from 'styled-components';


const FormButton = styled.button`
    display: inline - block;
    // border: none;
    border-radius: 2.5px;
    font-weight: bold;
    cursor: pointer;
    transition: 1s;
    border: 2px solid #E49D39;
    color: #ffffff;
    background: #E49D39;
    height: 35px;
    width: 100%;
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
        color: white;
        background: rgb(214, 139, 33);
        border: 2px solid rgb(214, 139, 33);
    }

`
export default FormButton