import React from 'react'
import ProductsContainer from '../Product/ProductsContainer'
import Categories from '../Categories/Categories'
import { FilterContainerStyled } from './FilterStyles'

const Filter = () => {

  return (
    <FilterContainerStyled>
        <h2>
          Sort our products based on your necessities
        </h2>
        <Categories/>
        <ProductsContainer/>
    </FilterContainerStyled>
  )
}

export default Filter