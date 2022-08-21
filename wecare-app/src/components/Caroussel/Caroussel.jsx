import React from "react";
import { products } from "../../data/Products";
import { useSelector } from 'react-redux';
import ProductContainer from "../Product/ProductContainer";
import {
  Carousellh1Styled,
  CarousselContainerStyled,
  CarousselInnerContainerStyled,
} from "./CarousselStyles";

const Caroussel = () => {

  const bestSellers = useSelector(state => state.bestSellers.bestSellers)

  return (

    <CarousselContainerStyled gridLenght={bestSellers.length}>
      <Carousellh1Styled>Best Sellers</Carousellh1Styled>
      <CarousselInnerContainerStyled>
        {bestSellers.map(bestSellers => (
          <ProductContainer
          key={bestSellers.id} // CAMBIÉ ACÁ
          {...bestSellers}
          />

        ))}
        
      </CarousselInnerContainerStyled>
    </CarousselContainerStyled>
  );
};

export default Caroussel;
