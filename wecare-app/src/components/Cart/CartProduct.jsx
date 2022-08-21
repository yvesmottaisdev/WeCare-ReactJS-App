import React from 'react'
import {useDispatch} from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart/cart-actions'
import { CartProductCardStyled, CartProductCardImgStyled,
CartProductCardInfoStyled, CartProductCardNameStyled,
CartProductCardPriceStyled, ProductQuantityContainerStyled, CartProductCardItemsStyled } from './CartStyles'
import Count from '../../components/UI/Count/Count'
import Increase from '../../components/UI/Increase/Increase'
import { IoMdTrash } from 'react-icons/io'


const CartProduct = ({img, name, price, quantity, id}) => {

  const dispatch = useDispatch()

  const itemQuantity = price * quantity

  return (
    <CartProductCardStyled>
      <CartProductCardImgStyled src={img}/>
      <CartProductCardInfoStyled>
          <CartProductCardNameStyled>{name}</CartProductCardNameStyled>
          <CartProductCardItemsStyled>{quantity} x {price}</CartProductCardItemsStyled>
          <CartProductCardPriceStyled>Total <span>${itemQuantity}</span></CartProductCardPriceStyled>
      </CartProductCardInfoStyled>
      <ProductQuantityContainerStyled>
        <Increase onClick={() => dispatch(cartActions.removeFromCart(id))}>
          {quantity === 1 ? <IoMdTrash/> : '-'}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => dispatch(cartActions.addToCart({img, name, price, quantity, id}))}>
          +
        </Increase>
      </ProductQuantityContainerStyled>
    </CartProductCardStyled>
  )
}

export default CartProduct