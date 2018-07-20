import styled from 'styled-components'
import { styleVariables } from '../../../../Assets/Styles';
const { colors } = styleVariables



const Header = styled.div`
    width: 100%;
    height: 7.5%;
    background: ${colors.white};
    color: ${colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    & h3 {
        font-size: 1.5rem;
        margin: 0;
    }
`
const BodyWindow = styled.div`
    width: 100%;
    height: 92.5%;
    position: relative;
    z-index: 50;
`

export {
    Header,
    BodyWindow
}