import styled from "styled-components";
import Link from "next/link";
import Close from "../public/close.svg";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

export default function MobileNavigation({ closeMenu }) {
  return (
    <StyledSection>
      <StyledButton>
        <StyledClose onClick={closeMenu} />
      </StyledButton>
      <MainNavigation />
      <StyledFooterWrapper>
        <Footer brightFont={true} />
      </StyledFooterWrapper>
    </StyledSection>
  );
}

const StyledFooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

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
