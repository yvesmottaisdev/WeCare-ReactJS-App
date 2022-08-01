import React from 'react'
import { ProductContainerStyled, ProductImageStyled, ProductInfoH2Styled, ProductInfoPStyled, ProductInfoStyled } from './ProductContainerStyles'
import AddToCartButton from './UI/Buttons/AddToCartButton'

const ProductContainer = () => {
  return (
    <ProductContainerStyled>
        <ProductImageStyled></ProductImageStyled>
        <ProductInfoStyled>
            <ProductInfoH2Styled>
                Grapefruit L
            </ProductInfoH2Styled>
            <ProductInfoPStyled>
                $12.99
            </ProductInfoPStyled>
            <AddToCartButton></AddToCartButton>
        </ProductInfoStyled>
    </ProductContainerStyled>
  )
}

export default ProductContainer