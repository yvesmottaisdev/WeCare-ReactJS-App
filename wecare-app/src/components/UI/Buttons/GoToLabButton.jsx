import React from 'react'
import { GoToLabButtonStyled } from './GoToLabButtonStyles'
import { Link } from 'react-router-dom'

const GoToLabButton = ({color}) => {
  return (
    <GoToLabButtonStyled color={color}><Link to="/">Go to The Lab</Link></GoToLabButtonStyled>
  )
}

export default GoToLabButton