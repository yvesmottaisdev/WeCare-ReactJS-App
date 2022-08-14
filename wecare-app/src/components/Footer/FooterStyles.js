import styled from 'styled-components'

export const FooterContainerStyled = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--black);

`;

export const FooterLinksStyled = styled.ul`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--black);

`;

export const FooterLinksLiStyled = styled.li`

    width: calc(100% / 3);
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    cursor: default;
    border-left: ${props => 
    (props.logo ? 'none' : '1px solid var(--black)')};
    font-weight: ${props => 
    (props.logo ? '800' : '500')};

    :hover{

        text-decoration: underline 1px var(--black);
        text-underline-offset: 6px;

    }

`;

export const FooterLinksSpanSyled = styled.span`

    font-size: 0.8em;
    font-weight: 600;

`;

export const FooterBannerContainerStyled = styled.div`

    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    background-color: var(--black);
    color: var(--white);

`;

export const FooterBannerPStyled = styled.p`

    padding: 0 0 0 5%;
    font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;

`;