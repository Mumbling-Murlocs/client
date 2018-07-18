import { variables } from '../../Assets/Styles';
import styled from 'styled-components';

const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    background: ${variables.colors.primary};
`

const Header = styled.div`
    width: 100%;
    height: 7.5%;
    background: ${variables.colors.primary};
    color: ${variables.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    & h3 {
        font-size: 1.5rem;
        margin: 0;
    }
`


const AppName = styled.div`
    background: ${variables.colors.primary};
`

const SidePanel = styled.div`
    background: ${variables.colors.dark};
`

export {
    DashboardLayout,
    Header,
    AppName,
    SidePanel
}