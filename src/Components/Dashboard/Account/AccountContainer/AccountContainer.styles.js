import  {Default}  from '../../../../Assets/Styles'



const Header = Default.Header.extend`
    
    display: flex;
    justify-content: center;
    align-items: center;
    & h3 {
        font-size: 1.5rem;
        margin: 0;
    }
`
const BodyWindow = Default.Window.extend`
`

export {
    Header,
    BodyWindow
}