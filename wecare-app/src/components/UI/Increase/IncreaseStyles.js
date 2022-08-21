import styled from "styled-components";

export const IncreaseStyled = styled.button`

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

`;