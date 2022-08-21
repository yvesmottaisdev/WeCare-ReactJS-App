import React from 'react'
import { ProductContainerStyled, ProductImageStyled, ProductInfoH2Styled, ProductInfoPStyled, ProductInfoStyled } from './ProductContainerStyles'
import AddToCartButton from '../UI/Buttons/AddToCartButton'
import {useDispatch} from 'react-redux/es/exports'
import * as cartActions from '../../Redux/cart/cart-actions'

const ProductContainer = ({name, price, img, id}) => {

  const dispatch = useDispatch()

  return (
    <ProductContainerStyled>
        <ProductImageStyled src={img}/>
        <ProductInfoStyled>
            <ProductInfoH2Styled>
            {name}
            </ProductInfoH2Styled>
            <ProductInfoPStyled>
              {typeof price === "number" ? "$" : ""} {price}
            </ProductInfoPStyled>
            <AddToCartButton onClick={() => dispatch(cartActions.addToCart({img, name, price, id}))}/>
        </ProductInfoStyled>
    </ProductContainerStyled>
  )
}

export default ProductContainer