import React from 'react'
import Category from './Category'
import { useSelector } from 'react-redux' 
import { CategoriesContainerStyled } from './CategoriesStyles'

const Categories = () => {

    const categories = useSelector(state => state.categories.categories)

  return (
    <CategoriesContainerStyled>
        
        {categories.map(category => (
            <Category
            title={category.title}
            key={category.id} // CAMBIÉ ACÁ
            category={category.category}
            />
        ))}
    </CategoriesContainerStyled>
  )
}

export default Categories