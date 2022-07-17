import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --dark-color: rgb(7, 7, 7);
  --background-color: #fff;
  --secondary-background-color: #f2f2f2;
  --transparent-light-color: #a9a9a9;
  --transparent-dark-color: #9b9999;
  --font-family: "Poppins";
  --font-size-xsm: 1.2rem;
  --font-size-sm: 1.6rem;
  --font-size-md: 2.4rem;
  --font-size-lg: 3rem;
  --font-size-xl: 4rem;
  --gap: 2rem;
  --margin-sm: 2rem;
  --margin-md: 3rem;
  --item-min-height-sm: 20rem;
  --item-min-height-md: 30rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  color: var(--dark-color);
  background-color: var(--background-color);
  letter-spacing: 1px;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

button {
  font: inherit;
  color: inherit;
  border: none;
  background-color: transparent;
  outline: none;
}

i {
  font-size: var(--font-size-md);
  color: var(--dark-color);
}

h1,
h2,
h3,
h4 {
  /* text-transform: capitalize; */
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: "Poppins";
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
}
@media screen and (min-width: 450px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.25rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 0.925rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

.active-content{
    display:flex;
  }
`;

export default GlobalStyles;
