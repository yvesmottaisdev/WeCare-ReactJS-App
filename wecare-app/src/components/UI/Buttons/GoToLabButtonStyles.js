import styled from "styled-components";
import { Link } from 'react-router-dom'

export const GoToLabButtonLinkStyled = styled(Link)`

    width: 15vw;
    height: 7vh;
    transition: 0.2s;

    :hover span {

        color: var(--white);
        background-color: var(--black);

    } 

`;

export const GoToLabButtonStyled = styled.span`

    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--black);
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s;

`;
