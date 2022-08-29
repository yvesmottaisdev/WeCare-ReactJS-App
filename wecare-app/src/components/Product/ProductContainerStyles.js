import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)',
    desktop: '@media(max-width: 1024px)'

}

export const ProductContainerStyled = styled.div`

    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    align-items: center;
    margin: 0;

    ${media.mobile}{

        width: 200px;
        height: 300px;

    }

    ${media.tablet}{

        width: 200px;
        height: 300px;

    }

`;

export const ProductImageStyled = styled.img`

    width: 20%;
    position: absolute;
    top: 0;

    ${media.mobile}{

        width: 25%;

    }

    ${media.tablet}{

        width: 25%;

    }

`;

export const ProductInfoStyled = styled.div`

    width: 100%;

`;

export const ProductInfoH2Styled = styled.h2`

    font-size: 1.2em;
    font-weight: 700;
    margin: 10% 0 2.5% 0;
    cursor: default;

    ${media.mobile}{

        font-size: 1em;

    }

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

    ${media.desktop}{

        grid-template-columns: auto auto;

    }

    ${media.mobile}{

        grid-template-columns: auto;

    }

`;