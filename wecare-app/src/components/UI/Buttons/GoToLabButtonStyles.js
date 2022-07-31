import styled, {css} from "styled-components";

export const GoToLabButtonStyled = styled.span`

    width: 15vw;
    padding: 1% 0;
    border: none;
    background-color: var(--white);
    border: 1px solid var(--black);
    transition: 0.2s;
    cursor: pointer;
    color: var(--black);
    font-size: 1em;
    font-weight: 700;

    &:hover {

        transform: scale(0.98, 0.98);
        background-color: var(--black);

    }

    &:hover > a{

        color: var(--white);
        font-weight: 600;

    }
`;
