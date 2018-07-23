import styled from 'styled-components'
// import { styleVariables } from '../../../../Assets/Styles'
import { Default } from '../../../../Assets/Styles'
// const { colors } = styleVariables


const Body = Default.Body.extend`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px;
`
const Title = styled.h3`
    margin: 0;
`
const EditButton = Default.Button.extend`
    margin-bottom: 20px;
`


export {
    Title,
    Body,
    EditButton
}
