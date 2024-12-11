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
    duration: 0.35,
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
  bottom: 5%;
  right: 0;
  width: 100vw;
  background-color: ${({ $lightBackground }) =>
    $lightBackground ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.2)"};
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (min-width: 800px) {
  width: ${({$lightBackground}) => ($lightBackground) ? "100vw" : "calc(100vw - 400px)"};
  margin-left: ${({$lightBackground}) => ($lightBackground) ? "0" : "400px"};
  }
  @media (min-width: 1000px) {
  width: ${({$lightBackground}) => ($lightBackground) ? "100vw" : "calc(100vw - 450px)"};
  margin-left: ${({$lightBackground}) => ($lightBackground) ? "0" : "450px"};
  }
  @media (min-width: 1200px) {
  width: ${({$lightBackground}) => ($lightBackground) ? "100vw" : "calc(100vw - 500px)"};
  margin-left: ${({$lightBackground}) => ($lightBackground) ? "0" : "500px"};
  }
`;

const StyledParagraph = styled.p`
  color: ${({ $darkFont }) =>
    $darkFont ? "var(--dark-font)" : "var(--light-font)"};
  font-size: 0.8rem;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1000) {
    font-size: 1.2rem;
  }
`;

const StyledButton = styled.div`
cursor: pointer;
  background-color: ${({ $coloredBackground }) =>
    $coloredBackground ? "var(--background)" : "var(--light-background)"};
  color: ${({ $coloredBackground }) =>
    $coloredBackground ? "var(--light-background)" : "var(--background)"};
  padding: 0.4rem;
  min-width: 70px;
  text-align: center;
  &:hover {
  transform: scale(1.05);
  transition: 300ms ease-in-out;
  }
`;
