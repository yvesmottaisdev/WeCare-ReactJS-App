import styled, {css} from "styled-components";

export const PhilosophySectionContainerStyled = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

    span{

        background-color: var(--black);

    }

    span > a {

        color: var(--white);

    }

    span:hover {

        background-color: var(--white);
        transform: none;

    }

    span:hover > a {

        color: var(--black);

    }

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
`;

export const PhilosophySectionInfoStyled = styled.div `

    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{

        margin: 5% 0 1%;
        font-size: 2.4em;
        cursor: default;

    }

    p{

        padding: 0 20% 1.5%;
        font-size: 1.3em;
        font-weight: 400;
        cursor: default;

    }

`;