import styled from "styled-components";

export const ProductContainerStyled = styled.div`

    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;

`;

export const ProductImageStyled = styled.img`

    width: 20%;

`;

export const ProductInfoStyled = styled.div`

    width: 100%;

`;

export const ProductInfoH2Styled = styled.h2`

    font-size: 1.2em;
    font-weight: 700;
    margin: 10% 0 2.5% 0;
    cursor: default;

`;

export const ProductInfoPStyled = styled.p`

    font-size: 1em;
    font-weight: 400;
    margin-bottom: 5%;
    cursor: default;

`;

export const ProductsContainerStyled = styled.div`

    width: 100%;
    height: auto;
    margin: 5% 0;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;

    > div{

        margin: 2vw;

    }

`;