import { motion } from "framer-motion";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function PageTransition({ children }) {
  const route = useRouter();

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
  };

  const pageTransition = {
    ease: "easeIn",
    duration: 0.5,
  };

  return (
    <StyledDiv
      as={motion.div}
      key={route.pathname}
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in">
      {children}
    </StyledDiv>
  );
}

const StyledDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
