import React from 'react'
import ProductContainer from '../ProductContainer'
import { CarousselContainerStyled } from './CarousselStyles'

const Caroussel = () => {
  return (
    <CarousselContainerStyled>
        {products.map (products => (
        <ProductContainer 
        key={product.id}
        productName = {product.name}
        productImage = {product.img}
        productPrice = {product.price}>
        </ProductContainer>))}
    </CarousselContainerStyled>
  )
}

export default Caroussel