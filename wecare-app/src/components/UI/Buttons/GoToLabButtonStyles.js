import styled from "styled-components";
import { Link } from 'react-router-dom'

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const GoToLabButtonLinkStyled = styled(Link)`

    width: 200px;
    height: 50px;
    transition: 0.2s;

    :hover span {

        color: var(--white);
        background-color: var(--black);

    }

    ${media.mobile}{

        width: 200px;
        height: 50px;

    }

    ${media.tablet}{

        width: 200px;
        height: 50px;

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
