import React from 'react'
import ProductsContainer from '../Product/ProductsContainer'
import Categories from '../Categories/Categories'
import { FilterContainerh2Styled, FilterContainerStyled } from './FilterStyles'

const Filter = () => {

  return (
    <FilterContainerStyled>
        <FilterContainerh2Styled>
          Sort our products based on your necessities
        </FilterContainerh2Styled>
        <Categories/>
        <ProductsContainer/>
    </FilterContainerStyled>
  )
}

export default Filter