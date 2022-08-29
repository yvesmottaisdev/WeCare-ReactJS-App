import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const FilterContainerStyled = styled.div`

    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;

`;

export const FilterContainerh2Styled = styled.h2`

    font-size: 1.7em;
    margin: 3% 0;

    ${media.mobile}{

        font-size: 1.5em;
        text-align: center;

    }

`;