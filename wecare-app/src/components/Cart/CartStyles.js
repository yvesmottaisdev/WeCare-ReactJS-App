import styled from "styled-components";


export const CartContainerStyled = styled.div`

    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    margin-top: 120px;

`;

export const Carth1Styled = styled.div`

    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 0 0 2.5%;
    border-bottom: 1px solid var(--black);

    & {

        font-size: 2em;
        font-weight: 600;

    }

`;

export const EmptyCartAlertContainerStyled = styled.div`

    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

`;

export const EmptyCarth2Styled = styled.h2`

    font-size: 1.3em;
    font-weight: 600;
    color: var(--gray);
    padding: 0 0 1% 0;

`;

export const CartProductsContainerStyled = styled.div`

    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;

`;

export const CartProductCardStyled = styled.div`

    width: 30vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5% 5%;
    border-bottom: 1px solid var(--black);
    border-right: 1px solid var(--black);
    margin-top: 0%;
    position: relative;

    :last-of-type{

        border-bottom: none;

    }

`;

export const CartProductCardImgStyled = styled.img`

    width: 30px;

`;

export const CartProductCardInfoStyled = styled.div`

    margin: 0 5%;

`;

export const CartProductCardNameStyled = styled.p`

    font-size: 1.1em;
    font-weight: 700;

`;

export const CartProductCardItemsStyled = styled.p`

    font-size: 1em;
    font-weight: 400;

`;

export const CartProductCardPriceStyled = styled.p`

    font-size: 1em;
    font-weight: 400;

    & > span{

        font-size: 1.1em;
        font-weight: 600;

    }

`;

export const CartTotalStyled = styled.div`

    height: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 2% 2%;
    border-top: 1px solid var(--black);

`;

export const CartTotalInfoStyled = styled.p`

    font-size: 1.2em;
    font-weight: 500;

`;

export const CartTotalSpanStyled = styled.span`

    font-weight: 700;

`;

export const ProductQuantityContainerStyled = styled.div`

    display: flex;
    align-items: center;
    position: absolute;
    right: 10%;

`;
