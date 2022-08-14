import styled from "styled-components";

export const FooterAnimationStyled = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 0;

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

`;