import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const CategoryCardStyled = styled.div`

    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid var(--black);
    border-right: none;
    padding: 1%;
    background-color: ${({ selected }) =>
    selected ? 'var(--black)' : 'var(--white)'};
    color: ${({ selected }) =>
    selected ? 'var(--white)' : 'var(--black)'};
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

    ${media.mobile}{

        width: 100%;
        height: 50px;
        border-right: none;
        border-left: none;
        border-bottom: none;
        display: flex;
        flex-direction: column;
        justify-content: center;

        :last-of-type{

            border-bottom: 1px solid var(--black);

        }

    }

`;

export const CategoryCardh2Styled = styled.h2`

    font-size: 1em;
    font-weight: 500;

`;

export const CategoriesContainerStyled = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    ${media.mobile}{

        flex-direction: column;
        align-items: center;

    }

`;