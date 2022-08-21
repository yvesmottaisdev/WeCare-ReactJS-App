import React from 'react'
import { useSelector } from 'react-redux'
import ProductContainer from './ProductContainer'
import { ProductsContainerStyled } from './ProductContainerStyles'

const ProductsContainer = () => {

    let products = useSelector(state => state.products.products)

    // console.log(Object.entries(products))
    const selectedCategory = useSelector(state => state.categories.selectedCategory)
    if(selectedCategory) {

        products = { [selectedCategory]: products
        [selectedCategory] }

    }

  return (
    
    <ProductsContainerStyled>
        { 
             Object.entries(products).map(([ , items]) => items.map( items => 
            //{
            //     if(limit >= items.id || selectedCategory){
            //         return 
                <ProductContainer
                    key={items.id} {...items}
                    />
                // }

                // return null
            // }
            
            ))
        }
    </ProductsContainerStyled>
  )
}

export default ProductsContainer