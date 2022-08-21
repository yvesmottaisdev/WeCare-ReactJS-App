import React from 'react'
import { AddToCartButtonStyled } from './AddToCartButtonStyles'

const AddToCartButton = ({onClick}) => {

  return (
    <AddToCartButtonStyled onClick={onClick}>Add to Cart</AddToCartButtonStyled>
  )
}

export default AddToCartButton