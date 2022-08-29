import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const IncreaseStyled = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    appearance: none;
    border: 1px solid var(--black);
    width: 30px;
    height: 30px;
    background-color: var(--white);
    font-size: 1.3em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    :hover{

        background-color: var(--black);
        color: var(--white);

    }

    ${media.mobile}{

        width: 25px;
        height: 25px;

    }

`;