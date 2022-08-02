import styled from "styled-components";

export const GoToLabButtonStyled = styled.span`

    width: 15vw;
    padding: 1% 0;
    border: none;
    background-color: ${props => 
    (props.color)};
    border: 1px solid var(--black);
    transition: 0.2s;
    cursor: pointer;

    & a {

        color: ${props => 
        (props.color === "var(--black)" ? 'var(--white)' : 'var(--black)')};
        font-size: 1em;
        font-weight: 700;

    }

    :hover {

        transform: scale(0.98, 0.98);
        background-color: ${props => 
        (props.color === "var(--black)" ? 'var(--white)' : 'var(--black)')};

    }

    :hover > a {

        color: ${props => 
        (props.color === "var(--black)" ? 'var(--black)' : 'var(--white)')};
        font-weight: 600;

    }
`;
