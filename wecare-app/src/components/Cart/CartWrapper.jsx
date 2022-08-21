import React from 'react'
import Increase from '../UI/Increase/Increase'
import Count from '../UI/Count/Count'
import GoToLabButton from '../UI/Buttons/GoToLabButton'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart/cart-actions'
import CartProduct from './CartProduct'
import { CartContainerStyled, Carth1Styled, EmptyCartAlertContainerStyled, EmptyCarth2Styled,
  CartProductsContainerStyled, CartTotalStyled, CartTotalInfoStyled, CartTotalSpanStyled} from './CartStyles'

const CartWrapper = (quantity) => {

  const dispatch = useDispatch()

  const {cartItems} = useSelector(state => state.cart)

  const totalPrice = cartItems.reduce((acc, item) => {

    return (acc += item.price * item.quantity);
    
  }, 0)

  return (
    
    <CartContainerStyled>

    <Carth1Styled>Your selection of products</Carth1Styled>

    <CartProductsContainerStyled>

    {cartItems.length ? (cartItems.map(item => 
    <CartProduct
        key= {item.id} {...item}/> // CAMBIÉ ACÁ
    )) : (

        <EmptyCartAlertContainerStyled>

        <EmptyCarth2Styled>It seems like you haven't added any product yet</EmptyCarth2Styled>
        <GoToLabButton>Go Shop</GoToLabButton>

        </EmptyCartAlertContainerStyled>

    )}

    </CartProductsContainerStyled>

      {cartItems.length ? (<CartTotalStyled>
      <CartTotalInfoStyled>Total $<CartTotalSpanStyled>{totalPrice}</CartTotalSpanStyled></CartTotalInfoStyled>
    </CartTotalStyled>) : null }
    

    </CartContainerStyled>

  )
}

export default CartWrapper