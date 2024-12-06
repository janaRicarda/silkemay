import { motion } from "framer-motion";
import styled from "styled-components";

export default function PageTransition({children}) {

    const pageVariants = {
        initial: {opacity: 0},
        in: {opacity: 1},
        out: {opacity: 0}
    };

    const pageTransition = {
        type: "tween",
        ease: "easeIn",
        duration: 0.5,
    };

    return (
        <StyledDiv as={motion.div} variants={pageVariants} transition={pageTransition} initial="initial" animate="in" exit="out">
            {children}
        </StyledDiv>
    )
}

const StyledDiv = styled(motion.div)`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;