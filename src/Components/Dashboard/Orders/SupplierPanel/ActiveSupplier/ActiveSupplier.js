import React, {Fragment} from 'react'
import Tag from './ActiveSupplier.styles.js'
import Catelogue from '../../../../../UI/Catelogue/Catelogue'


const ActiveSupplier = (props) => {
    const { activeSupplier, catelogue } = props
    return(
        <Fragment>
            <Catelogue padding='0' width="100%" catelogue={catelogue} />
        </Fragment>
    )
}

export default ActiveSupplier
