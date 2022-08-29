import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const HeaderContainerStyled = styled.div`

    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 2;

    a{

        color: var(--black);

    }

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
    text-align: center;
    padding: 0 3%;

    ${media.mobile}{

        font-size: 0.8em;

    }

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

    ${media.mobile}{

        margin: 10%;

    }

`;

export const NavbarLogoStyled = styled.div`

    font-size: 1.5em;
    font-weight: 800;
    padding: 0 1%;
    cursor: pointer;
    text-align: center;

    &{

        text-decoration: none;

    }

    ${media.mobile}{

        font-size: 1.2em;

    }

`;

export const NavbarLogoLinkSpanStyled = styled.span`

    font-size: 0.7em;
    font-weight: 600;

`;
