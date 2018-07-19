import { styleVariables } from '../../../Assets/Styles';
import styled from 'styled-components';
const { colors } = styleVariables

const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    background: ${colors.primary};
`

const Header = styled.div`
    width: 100%;
    height: 7.5%;
    background: ${colors.primary};
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    & h3 {
        font-size: 1.5rem;
        margin: 0;
    }
`


const AppName = styled.div`
    background: ${colors.primary};
`

const SidePanel = styled.div`
    background: ${colors.dark};
`

export {
    DashboardLayout,
    Header,
    AppName,
    SidePanel
}