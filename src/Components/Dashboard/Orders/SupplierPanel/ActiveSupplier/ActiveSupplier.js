import React, {Fragment} from 'react'

import Catelogue from '../../../../../UI/Catelogue/Catelogue'


const ActiveSupplier = (props) => {
    const { activeSupplier, catelogue } = props
    return(
        <Fragment>
            <Catelogue description='null' padding='0' width="100%" catelogue={catelogue} />
        </Fragment>
    )
}

export default ActiveSupplier
