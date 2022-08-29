import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const AddToCartButtonStyled = styled.button`

    width: 100%;
    border: 1px solid var(--black);
    padding: 5%;
    font-size: 1em;
    font-weight: 500;
    background-color: var(--white);
    color: var(--black);
    transition: 0.2s;
    cursor: pointer;

    :hover{

        background-color: var(--black);
        color: var(--white);

    }

    ${media.mobile}{

        height: 50px;

    }

`;