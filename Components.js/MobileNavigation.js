import styled from "styled-components";
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
 border: 1px solid white;
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
  width: 3.8rem;
  height: 3.8rem;
  fill: var(--light-font);
  cursor: pointer;
  &:hover {
  transform: scale(1.2);
  transition: 300ms ease-in-out;
  }
`;
