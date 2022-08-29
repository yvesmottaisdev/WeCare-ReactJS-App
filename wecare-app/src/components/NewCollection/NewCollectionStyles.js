import styled from "styled-components";
import backgroundimg from '../../images/background7.png'

const media = {

    mobile: '@media(max-width: 425px)',
    tablet: '@media(max-width: 768px)'

}

export const NewCollectionContainerStyled = styled.div`

    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid var(--black);
    background-image: url(${backgroundimg});
    background-repeat: no-repeat;
    background-size: cover;

    ${media.mobile}{

        height: 60vh;

    }

    ${media.tablet}{

        height: 60vh;

    }


`;

export const NewCollectionInfoContainerStyled = styled.div`

    width: 50vw;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.mobile}{

        width: 100%;

    }

    ${media.tablet}{

        width: 100%;

    }

`;

export const NewCollectionInfoh2Styled = styled.h2`


    font-size: 1.5em;
    font-weight: 800;
    text-align: center;
    color: var(--white);
    text-decoration: underline solid 3px var(--white);
    text-underline-offset: 10px;

    ${media.mobile}{

        text-decoration: none;
        font-size: 1.2em;
        padding: 0 5% 5%;

    }

`;

export const NewCollectionInfoPStyled = styled.p`

    padding: 5% 0;
    font-size: 1.2em;
    font-weight: 600;
    text-align: center;
    color: var(--white);

    ${media.mobile}{

        display: none;

    }

    ${media.tablet}{

        padding: 5% 10%;

    }

`;

export const NewCollectionInfoLinkStyled = styled.p`

    display: flex;
    font-weight: 600;
    margin: 0;
    transition: 0.2s;

    a {

        width: 150px;
        height: 25px;
        text-align: center;
        padding: 10% 5%;
        border: 1px solid var(--white);
        text-decoration: none;
        font-size: 1.2em;
        color: var(--white);

    }

    :hover {

        transform: scale(1.05, 1.05);
        background-color: var(--white);

    }

    :hover > a {

        color: var(--black);

    }

    ${media.mobile}{

        a {

            width: 150px;
            height: 25px;

        }
        
    }

    ${media.tablet}{

        a {

            width: 150px;
            height: 25px;

        }

    }

`;