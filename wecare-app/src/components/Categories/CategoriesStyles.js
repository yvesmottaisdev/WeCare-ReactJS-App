import styled from "styled-components";

export const CategoryCardStyled = styled.div`

    width: 15vw;
    border: 1px solid var(--black);
    border-right: none;
    padding: 1%;
    background-color: var(--white);
    transition: 0.2s;
    cursor: pointer;
    text-align: center;

    :hover{

        background-color: var(--black);

    }

    :hover > h2 {

        color: var(--white);

    }

    :last-of-type{

        border-right: 1px solid var(--black);

    }

`;

export const CategoryCardh2Styled = styled.h2`

    font-size: 1em;
    font-weight: 500;
    color: var(--black);

`;

export const CategoriesContainerStyled = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

`;