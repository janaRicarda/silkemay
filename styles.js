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
    --link: #8b8888;
}
  body {
  background: var(--light-background);
  color: var(--dark-font);
  font-weight: 100;
  font-family: system-ui;
 @media (min-width: 800px) {
 margin-left: 400px;
 font-size: 1.1rem;
 }
 @media (min-width: 1000px) {
 margin-left: 450px;
 }
 @media (min-width: 1200px) {
 margin-left: 500px;
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