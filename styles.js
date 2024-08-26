import { createGlobalStyle } from "styled-components";
import {Outfit} from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Electrolize } from "next/font/google";



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

  --background: #FAF4EC;
 
--font: #45525b;
 
--light-font: var(--font);

  --light-backgorudn: #FFAEA7;




}
  body {
  //padding-top: 81.6px;
  //height: 100vh;
  background: var(--background);
  color: var(--font);
  font-family: ${outfit.style.fontFamily};
  font-weight: 100;
 @media (min-width: 800px) {
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