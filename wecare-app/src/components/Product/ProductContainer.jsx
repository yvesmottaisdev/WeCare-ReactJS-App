import React from 'react'
import { ProductContainerStyled, ProductImageStyled, ProductInfoH2Styled, ProductInfoPStyled, ProductInfoStyled } from './ProductContainerStyles'
import AddToCartButton from '../UI/Buttons/AddToCartButton'

const ProductContainer = ({name, price, img, id}) => {

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
            <AddToCartButton/>
        </ProductInfoStyled>
    </ProductContainerStyled>
  )
}

export default ProductContainer