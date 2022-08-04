import React from 'react'
import { GoToLabButtonLinkStyled, GoToLabButtonStyled } from './GoToLabButtonStyles'


const GoToLabButton = () => {
  return (
    <GoToLabButtonLinkStyled to="/product/thelab"><GoToLabButtonStyled>Go to The Lab</GoToLabButtonStyled></GoToLabButtonLinkStyled>
  )
}

export default GoToLabButton