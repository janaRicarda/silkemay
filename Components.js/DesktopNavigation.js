// import styled from "styled-components";
// import Link from "next/link";
// import { useState } from "react";
// import Footer from "./Footer";
// import PaintingMenu from "./PaintingMenu";
// import TherapyMenu from "./TherapyMenu";
// import MainNavigation from "./MainNavigation";

// export default function DesktopNavigation() {
//   const [showPainting, setShowPainting] = useState(false);
//   const [showTherapy, setShowTherapy] = useState(false);

//   function handleShowPainting() {
//     setShowPainting(!showPainting);
//     setShowTherapy(false);
//   }

//   function handleShowTherapy() {
//     setShowTherapy(!showTherapy);
//     setShowPainting(false);
//   }

//   function handleRemoveMenus() {
//     setShowPainting(false);
//     setShowTherapy(false);
//   }

//   return (
//     <>
//       <StyledNavSection>
//         <MainNavigation />
//         <StyledNav>
//           {showPainting && <PaintingMenu />}
//           <StyledArticle>
//             <StyledLink href="/malerei" onClick={handleShowPainting}>
//               MALEREI
//             </StyledLink>
//             <StyledLink $main href="/" onClick={handleRemoveMenus}>
//               SILKE MAY
//             </StyledLink>
//             <StyledLink href="/therapie" onClick={handleShowTherapy}>
//               THERAPIE
//             </StyledLink>
//           </StyledArticle>
//           {showTherapy && <TherapyMenu />}
//         </StyledNav>
//         <Footer brightFont={true} />
//       </StyledNavSection>
//     </>
//   );
// }

// const StyledNavSection = styled.section`
//   height: 100vh;
//   background: var(--background);
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-end;
//   display: flex;
//   width: 400px;

//   position: fixed;
//   top: 0;
//   left: 0;

//   @media (min-width: 1000px) {
//     width: 450px;
//   }
//   @media (min-width: 1200px) {
//     width: 500px;
//   }
// `;

// const StyledNav = styled.nav`
//   padding: 1rem;
//   //border: 1px solid yellow;
// `;

// const StyledArticle = styled.article`
//   //border: 1px solid blue;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-end;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: var(--light-font);
//   font-size: ${({ $main }) => ($main ? "4rem" : "3rem")};
//   opacity: ${({ $main }) => ($main ? "1" : "0.5")};
//   &:hover {
//     opacity: 1;
//   }
//   &:focus {
//     opacity: 1;
//   }
// `;
