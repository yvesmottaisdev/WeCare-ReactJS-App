import styled from "styled-components";
import backgroundimg from "../../images/background4.jpg";


export const BannerHeroContainerStyled = styled.div`

    width: 100%;
    height: calc(100vh - 7vh - 5vh);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${backgroundimg});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    text-align: center;

`;

export const BannerHeroTitleStyled = styled.h1`

    display: flex;
    flex-direction: column;
    font-size: 4em;
    cursor: default;
    color: var(--white);
    margin-top: 5%;

`;

export const BannerHeroAnimationStyled = styled.span`

    &::before {

    font-size: 1em;
    content: "health";
    animation: changeWordsAnim infinite 4s;

    }

    @keyframes changeWordsAnim {

    0%{

        content: "health";

    }

    25% {

        content: "life-style";

    }

    50% {

        content: "skin";

    }

    75% {

        content: "body";

    }

    100%{

        content: "health";

    }

    }

`;

export const BannerHeroSubtitleStyled = styled.h2`

    font-size: 1.3em;
    font-weight: 500;
    margin: 2% 0;
    color: var(--white);
    cursor: default;

`;