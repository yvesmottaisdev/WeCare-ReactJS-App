import React from 'react'
import { AddToCartButtonStyled } from './AddToCartButtonStyles'
import {useDispatch} from 'react-redux/es/exports'
import * as cartActions from '../../../Redux/cart/cart-actions'

const AddToCartButton = ({name, price, img, id}) => {

  const dispatch = useDispatch()

  return (
    <AddToCartButtonStyled onClick={() => dispatch(cartActions.addToCart({img, name, price, id}))}>Add to Cart</AddToCartButtonStyled>
  )
}

export default AddToCartButton