import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const PhilosophySectionContainerStyled = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;

`;

export const PhilosophySectionRowStyled = styled.div`

    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);

`;

export const PhilosophySectionUlStyled = styled.ul`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;

`;

export const PhilosophySectionLiStyled = styled.li`

    width: calc(100% / 3);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: ${props => 
    (props.bLeft ? 'none' : '1px solid var(--black)')};
    font-weight: 500;
    cursor: default;
    text-decoration: underline wavy 2px var(--black);
    text-underline-offset: 6px;

    ${media.mobile}{

        font-size: 0.8em;
        line-height: 25px;

    }
`;

export const PhilosophySectionInfoStyled = styled.div `

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;

    & h2{

        font-size: 2.4em;
        cursor: default;

    }

    & p{

        padding: 30px 15%;
        font-size: 1.3em;
        font-weight: 400;
        cursor: default;

    }

    ${media.mobile}{

        height: 60vh;

        h2 {

            font-size: 2em;

        }

        p{

            font-size: 1em;
            font-weight: 500;

        }

    }

`;