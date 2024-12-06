import styled from "styled-components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function CookieBanner({ handleCookieBanner }) {
  const pathname = useRouter().pathname;

  const isIndexPage = pathname === "/";

  const variants = {
    initial: { right: "-100%" },
    slideIn: { right: 0 },
    slideOut: { right: "-100%" },
  };

  const transition = {
    duration: 0.5,
  };

  return (
    <>
      <StyledDiv
        variants={variants}
        transition={transition}
        initial="initial"
        animate="slideIn"
        exit="slideOut"
        $lightBackground={isIndexPage}>
        <StyledParagraph $darkFont={isIndexPage}>
          Diese Seite nutzt nur technisch notwendige Cookies!
        </StyledParagraph>
        <StyledButton
          onClick={handleCookieBanner}
          $coloredBackground={isIndexPage}>
          Ok
        </StyledButton>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled(motion.div)`
  position: fixed;
  top: 70%;
  right: 0;

  background-color: ${({ $lightBackground }) =>
    $lightBackground ? "var(--light-background)" : "var(--background)"};

  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem 0 0 1rem;
`;

const StyledParagraph = styled.p`
  color: ${({ $darkFont }) =>
    $darkFont ? "var(--dark-font)" : "var(--light-font)"};
  font-weight: bolder;
  font-size: 0.8rem;

  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1000) {
    font-size: 1.2rem;
  }
`;

const StyledButton = styled.div`
  background-color: ${({ $coloredBackground }) =>
    $coloredBackground ? "var(--background)" : "var(--light-background)"};
  color: ${({ $coloredBackground }) =>
    $coloredBackground ? "var(--light-background)" : "var(--background)"};

  padding: 0.4rem;
  min-width: 70px;

  text-align: center;
  font-weight: bolder;
`;
