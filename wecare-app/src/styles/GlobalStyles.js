import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

:root{

    --white: white;
    --black: black;
    --gray:  #646464;
    --greenblue: #97edb6;

}

*{

    margin: 0;
    padding: 0;
    font-family: "Manrope", sans-serif;

}

a{

    text-decoration: none;
    color: var(--black);

}

li{

    list-style: none;

}

`
