import styled from 'styled-components'
import { styleVariables } from '../../../../Assets/Styles';
const { colors } = styleVariables


const SubMenuStyle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 65%;
    height: 100%;
    background: ${colors.dark};
    color: ${colors.white};
    padding-top: 100px;
    z-index: 50;
    display: flex;
    align-items: center;
    flex-direction: column;
`



export { SubMenuStyle }