import React from 'react'
import { IncreaseStyled } from './IncreaseStyles'

const Increase = ({children, onClick = e => e.preventDefault(), }) => {

    return (

        <IncreaseStyled onClick={onClick}>{children}</IncreaseStyled>
    )

}

export default Increase