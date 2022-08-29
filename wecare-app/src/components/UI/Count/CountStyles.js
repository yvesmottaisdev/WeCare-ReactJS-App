import styled from "styled-components";

const media = {

    tablet: '@media(max-width: 768px)',
    desktop: '@media(max-width: 1024px)'

}

export const CountStyled = styled.span`

    width: 2vw;
    padding: 1%;
    text-align: center;
    font-weight: 500;
    font-size: 1.1em;

    ${media.desktop}{

        padding: 5px;

    }


    ${media.tablet}{

        padding: 10px;
    }

`;