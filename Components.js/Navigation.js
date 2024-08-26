import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function MainNavigation() {
    const [showPainting, setShowPainting] = useState(false);
    const [showTherapy, setShowTherapy] = useState(false);

function handlePainting() {
    setShowPainting(!showPainting)
    setShowTherapy(false)
}

function handleTherapy() {
    setShowTherapy(!showTherapy)
    setShowPainting(false)
}

    return(
        <StyledSection>
            {showPainting && 
            (<StyledLinkWrapper>
                <StyledLink href="/">AKTUELLES</StyledLink>
                <StyledLink href="/">ÖLMALEREI</StyledLink>
                <StyledLink href="/">PAPIERMALEREI</StyledLink>
                <StyledLink href="/">ZEICHNEN</StyledLink>
                <StyledLink href="/">KALLIGRAPHIE</StyledLink>
                </StyledLinkWrapper>)}
            <StyledArticle>
            <StyledButton onClick={handlePainting}><StyledH2>MALEREI</StyledH2></StyledButton>
            </StyledArticle>
<StyledArticle>
<StyledH1><StyledLink href="/">SILKE MAY</StyledLink></StyledH1>
</StyledArticle>
<StyledArticle>
            <StyledButton onClick={handleTherapy}>
<StyledH2>THERAPIE</StyledH2>
</StyledButton>
</StyledArticle>
{showTherapy && 
            (<StyledLinkWrapper>
                <StyledLink href="/">KUNSTTHERAPIE</StyledLink>
                <StyledLink href="/">BERATUNG</StyledLink>
                <StyledLink href="/">KUNSTVERMITTLUNG</StyledLink>
                <StyledLink href="/">INKLUSIVE KUNSTPROJEKTE</StyledLink>
                <StyledLink href="/">MBSR</StyledLink>
                <StyledLink href="/">ALLGEMEINES</StyledLink>
                </StyledLinkWrapper>)}
          
        </StyledSection>
    )
}

const StyledSection = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding-right: 1rem;
`;

const StyledArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`;

const StyledLinkWrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
`;

const StyledH1 = styled.h1`
font-size: 3rem;
font-weight: 100;
`;

const StyledH2 = styled.h2`
font-size: 4rem;
font-weight: 100;
opacity: 0.4;
&:hover {
opacity: 1;
}
`;

const StyledButton = styled.button`
border-style: none;
background: transparent;
color: var(--light-font);
`;