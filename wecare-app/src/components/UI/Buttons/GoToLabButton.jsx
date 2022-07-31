import React from 'react'
import { GoToLabButtonStyled } from './GoToLabButtonStyles'

const GoToLabButton = ({color, children}) => {
  return (
    <GoToLabButtonStyled className={"btn-" + color}>{children}</GoToLabButtonStyled>
  )
}

export default GoToLabButton