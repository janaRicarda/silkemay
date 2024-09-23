import styled, {keyframes} from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import Painting from "./PaintingMenu";
import Therapy from "./TherapyMenu";

export default function MainNavigation() {
const [showPainting, setShowPainting] = useState(false);
const [showTherapy, setShowTherapy] = useState(false);

function handleShowPainting() {
    setShowPainting(!showPainting);
    setShowTherapy(false);
}

function handleShowTherapy() {
    setShowTherapy(!showTherapy);
    setShowPainting(false);
}

    return(
        <>
        <StyledNavSection>
            <StyledArticle>
                {showPainting && <Painting />}
                <StyledLink href="/painting" onClick={handleShowPainting}>
                MALEREI
                </StyledLink>
            </StyledArticle>
            <StyledArticle>
                <StyledH1>SILKE MAY</StyledH1>
                <StyledParagraph $mobile >KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE / BILDENDE KÜNSTLERIN</StyledParagraph>
            </StyledArticle>
            <StyledArticle>
                <StyledLink href="/therapy" onClick={handleShowTherapy}>
                THERAPIE
                </StyledLink>
                {showTherapy && <Therapy />}
            </StyledArticle>
            <Footer />
        </StyledNavSection>
     
        </>
    );
}


const StyledNavSection = styled.section`
width: 100%;
height: 100vh;
background: var(--background);
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 1rem;
@media (min-width: 800px) {
width: 400px;
position: fixed;
top: 0;
left: 0;
}
`;

const StyledArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`;

const StyledParagraph = styled.p`
color: var(--light-font);
text-align: right;
text-align : ${({$mobile}) => ($mobile ? "right" : "left")};
@media (min-width: 800px) {
display : ${({$mobile}) => ($mobile ? "none" : "block")};
}
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
font-size: 3rem;
opacity: 0.5;
&:hover {
opacity: 1;
}
&:focus {
opacity: 1;
}
`;

const StyledH1 = styled.h1`
font-size: 4rem;
font-weight: 100;
color: var(--light-font);
`;

const StyledH2 = styled.h2`


`;

const StyledButton = styled.button`
border-style: none;
background: transparent;
font-size: 4rem;
font-weight: 100;
color: var(--light-font);
opacity: 0.4;
&:hover {
opacity: 1;
}
&:focus {
opacuty: 1;}
`;

