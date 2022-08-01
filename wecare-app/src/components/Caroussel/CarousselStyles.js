import styled from "styled-components";

export const CarousselContainerStyled = styled.div`

    gap: 20px;
    padding: 1rem;
    display: grid;
    grid-template-columns: ${({gridLength}) => `repeats(${gridLength}, 1fr)`};
    overflow: scroll;

    &::-webkit-scrollbar {

        height: 6px;
        width: 4px;
        background: transparent;

    }

    &::-webkit-scrollbar-thumb{

        background-color: var(--black);
        border-radius: 5px;

    }

    &::webkit-scrollbar:vertical{

        display: none;

    }

`;



