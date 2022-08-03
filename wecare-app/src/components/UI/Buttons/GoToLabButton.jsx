import React from 'react'
import { GoToLabButtonLinkStyled, GoToLabButtonStyled } from './GoToLabButtonStyles'
import { Link } from 'react-router-dom'


const GoToLabButton = () => {
  return (
    <GoToLabButtonLinkStyled to="/product/thelab"><GoToLabButtonStyled>Go to The Lab</GoToLabButtonStyled></GoToLabButtonLinkStyled>
  )
}

export default GoToLabButton