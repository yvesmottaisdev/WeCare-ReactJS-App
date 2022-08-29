import React from 'react'
import { GoToLabButtonLinkStyled, GoToLabButtonStyled } from './GoToLabButtonStyles'


const GoToLabButton = ({children}) => {
  return (
    <GoToLabButtonLinkStyled to="/thelab"><GoToLabButtonStyled>{children}</GoToLabButtonStyled></GoToLabButtonLinkStyled>
  )
}

export default GoToLabButton