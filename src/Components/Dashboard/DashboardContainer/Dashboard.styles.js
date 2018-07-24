import { styleVariables } from '../../../Assets/Styles';
import styled from 'styled-components';
const { colors } = styleVariables

const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100%;
    background: linear-gradient(to bottom right, #1DA1F2, #1B95E0, #1888CE, #1574AF);
`

const Header = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    z-index: 50;
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
    position: relative;
`

const Window = styled.div`
    position: relative;
`
const LogoBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 25;
`

export {
    DashboardLayout,
    Header,
    AppName,
    SidePanel,
    Window,
    LogoBackground
}