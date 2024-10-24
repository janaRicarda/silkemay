import styled from "styled-components";
import { keyframes } from "styled-components";
import Link from "next/link";
import Painting from "./PaintingMenu";
import Therapy from "./TherapyMenu";
import Infos from "./InfosMenu";
import { useState } from "react";
import Close from "../public/close.svg";

export default function MobileMenu({ handleMenu }) {
  const [showPainting, setShowPainting] = useState(false);
  const [showTherapy, setShowTherapy] = useState(false);
  const [showInfos, setShowInfos] = useState(false);

  function handleShowPainting() {
    setShowPainting(!showPainting);
    setShowTherapy(false);
    setShowInfos(false);
  }

  function handleShowTherapy() {
    setShowTherapy(!showTherapy);
    setShowPainting(false);
    setShowInfos(false);
  }

  function handleShowInfos() {
    setShowInfos(!showInfos);
    setShowPainting(false);
    setShowTherapy(false);
  }
  return (
    <StyledSection>
      <StyledNav>
        <StyledLink href="/">STARTSEITE</StyledLink>
        <StyledMenuButton onClick={handleShowPainting}>
          MALEREI
        </StyledMenuButton>
        {showPainting && <Painting handleMenu={handleMenu} />}
        <StyledMenuButton onClick={handleShowTherapy}>
          THERAPIE
        </StyledMenuButton>
        {showTherapy && <Therapy handleMenu={handleMenu} />}
        <StyledMenuButton onClick={handleShowInfos}>INFOS</StyledMenuButton>
        {showInfos && <Infos handleMenu={handleMenu} />}
      </StyledNav>
      <StyledButton onClick={handleMenu}>
        <StyledClose />
      </StyledButton>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (orientation: landscape) {
    padding-right: 11rem;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--light-font);
`;

const StyledMenuButton = styled.button`
  border-style: none;
  background: transparent;
  font-size: 2.5rem;
  padding: 0;
  color: var(--light-font);
`;

const StyledButton = styled.button`
  background: transparent;
  border-style: none;
  color: var(--light-font);
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem 2rem 0 0;
`;

const StyledClose = styled(Close)`
  width: 3rem;
  height: 3rem;
  fill: var(--light-font);
`;
