import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as categoriesActions from '../../Redux/categories/categories-actions'
import { CategoryCardStyled, CategoryCardh2Styled } from './CategoriesStyles'

const Category = ({title, category}) => {

    const selectedCategory = useSelector(
        state => state.categories.selectedCategory
    )

    const dispatch = useDispatch()

    const handlerFilter = category => {

      dispatch(categoriesActions.selectCategory(category))
        
    }

  return (
    <CategoryCardStyled
    selected={selectedCategory}
    onClick={() => handlerFilter(category)}
    >
        <CategoryCardh2Styled>{title}</CategoryCardh2Styled>
    </CategoryCardStyled>
  )
}

export default Category