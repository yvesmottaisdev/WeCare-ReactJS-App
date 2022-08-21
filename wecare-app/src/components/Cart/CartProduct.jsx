import React from 'react'
import {useDispatch} from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart/cart-actions'
import { CartProductCardStyled, CartProductCardImgStyled,
CartProductCardInfoStyled, CartProductCardNameStyled,
CartProductCardPriceStyled, ProductQuantityContainerStyled } from './CartStyles'
import Count from '../../components/UI/Count/Count'
import Increase from '../../components/UI/Increase/Increase'


const CartProduct = ({img, name, price, quantity, id}) => {

  const dispatch = useDispatch()

  return (
    <CartProductCardStyled>
      <CartProductCardInfoStyled>
      <CartProductCardImgStyled src={img}/>
          <CartProductCardNameStyled>{name}</CartProductCardNameStyled>
          <CartProductCardPriceStyled>{price}</CartProductCardPriceStyled>
      </CartProductCardInfoStyled>
      <ProductQuantityContainerStyled>
        <Increase onClick={() => dispatch(cartActions.removeFromCart(id))}>
          {quantity === 1 ? 'Delete' : '-'}
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