import styled, {css} from "styled-components";

export const HeaderContainerStyled = styled.div`

    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 2;

`;

export const BannerContainerStyled = styled.div`

    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    cursor: default;

`;

export const BannerParagraphStyled = styled.p`

    color: var(--white);
    font-weight: 600;

`;

export const NavbarContainerStyled = styled.div`

    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid var(--black);
    background-color: var(--white);
    
`;

export const NavbarElementStyled = styled.div`

    display: flex;
    width: 30%;
    height: 7vh;
    align-items: center;

    border-right: ${props => 
    (props.bRight ? '1px solid var(--black)' : 'none')};

    border-left: ${props => 
    (props.bLeft ? '1px solid var(--black)' : 'none')};


`;

export const NavbarUlStyled = styled.ul`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${props => 
    (props.jcend ? 'flex-end' : 'flex-start')};

`;

export const NavbarLiStyled = styled.li`

    margin: 0 2%;

    :hover{

        text-decoration: underline 1px var(--black);
        text-underline-offset: 6px;

    }

`;

export const NavbarLogoStyled = styled.div`

    font-size: 1.5em;
    font-weight: 800;
    padding: 0 1%;
    cursor: pointer;

    &{

        text-decoration: none;

    }

`;

export const NavbarLogoLinkSpanStyled = styled.span`

    font-size: 0.7em;
    font-weight: 600;

`;
