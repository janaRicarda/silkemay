import { createGlobalStyle } from "styled-components";
import {Outfit} from "next/font/google";




export default createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
  margin: 0;
}
  :root {
    --background: #d95555;
    --light-font: #ffffff;
    --light-background: #ffffff;
    --dark-font: #5c5b5b;
}
  body {
  background: var(--light-background);
  color: var(--dark-font);
  font-weight: 100;
  font-family: system-ui;
 @media (min-width: 800px) {
 margin-left: 400px;
 //margin-left: 45vw;
 font-size: 1.1rem;
 }
  }

 img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  &:hover {
  --hover: var(--light-accent);}
}

nput, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;