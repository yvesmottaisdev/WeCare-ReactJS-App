import React from 'react'
import { products } from '../../data/Products'
import ProductContainer from '../Product/ProductContainer'
import { Carousellh1Styled, CarousselContainerStyled, CarousselInnerContainerStyled } from './CarousselStyles'

const Caroussel = () => {

  return (
    <CarousselContainerStyled gridLenght={products.length}>
    <Carousellh1Styled>Best Sellers</Carousellh1Styled>
    <CarousselInnerContainerStyled>
          
          {products.map (products => (
          <ProductContainer
          key = {products.id}
          name = {products.name}
          img = {products.img}
          price = {products.price}
          />
          ))}

    </CarousselInnerContainerStyled>
    </CarousselContainerStyled>
    
  )
}

export default Caroussel