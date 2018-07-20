import { styleVariables } from '../../Assets/Styles';
import styled from 'styled-components';

const ErrorMessage = styled.p`
    text-align: center;
    margin: 0;
    color: rgb(240, 70, 70);
    margin-bottom: 10px;
`

const FormBody = styled.form`
    background-color: ${styleVariables.colors.white}
    padding: 30px;
    border-radius: 5px;
    width: 450px;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: left;

`
const FormTitle = styled.h3`
    color: ${styleVariables.colors.primary};
    padding-bottom: 30px;
    margin: 0 0;
`



// .submitBox {
//     display: flex;
//     /* justify-content: space-between; */
//     width: 100 %;
// }


// .form p {
//     /* text-decoration: underline; */
//     text - align: center;
//     color: rgb(223, 221, 221);
//     margin - bottom: 0;
//     margin - left: 15px;
// }

// .form p: hover {
//     cursor: pointer;
// }

// .submitBox {
//     width: 100 %;
// }
export default {
    ErrorMessage,
    FormBody,
    FormTitle
}