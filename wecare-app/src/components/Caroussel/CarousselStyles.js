import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const CarousselContainerStyled = styled.div`

    padding-bottom: 5%;
    display: grid;
    grid-template-columns: 5vw 1fr 5vw;
    align-self: start;
    border-bottom: 1px solid var(--black);

    & > * {

        grid-column: 2 / -2;

    }

    ${media.mobile}{

        height: 70vh;

    }

    ${media.tablet}{

        height: 70vh;

    }

`;

export const CarousselInnerContainerStyled = styled.div`

    display: grid;
    grid-gap: 3%;
    grid-template-columns: 0;
    grid-auto-flow: column;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    padding: 0 0 1.5% 0;
    
    
    :before, :after{

    content: '';
    width: 10px;

    }

    ::-webkit-scrollbar {

    height: 10px;
    width: 4px;
    background: lightgray;

    }

    ::-webkit-scrollbar-thumb{

    background-color: var(--black);
    border-radius: 0;

    }

    ::webkit-scrollbar:vertical{

    display: none;
    
    }

`;

export const Carousellh1Styled = styled.h1`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.8em;
    margin: 5% 0;
    cursor: default;

`;
