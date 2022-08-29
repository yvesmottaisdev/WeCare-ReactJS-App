import styled from "styled-components";

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const FooterAnimationStyled = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 0;

    ${media.mobile}{

        height: 20vh;

    }

`;

export const FooterAnimationImageStyled = styled.img`

    width: 10%;
    animation: spin 30s linear infinite;


    @keyframes spin{

        0%{

            transform: rotate(0deg);

        }

        100%{

            transform: rotate(360deg);

        }

    }

    ${media.mobile}{

        width: 25%;

    }

`;