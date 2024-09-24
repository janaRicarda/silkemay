import styled from "styled-components";
import Link from "next/link";
import Footer from "./Footer";

export default function MobileLandingPage() {

    return(
        <StyledNavSection>
        <StyledNav>
        <StyledArticle>
            <StyledLink href="/malerei">
            MALEREI
            </StyledLink>
        </StyledArticle>
        <StyledArticle>
            <StyledLink $main href="/">SILKE MAY</StyledLink>
            <StyledParagraph $mobile >KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE / BILDENDE KÜNSTLERIN</StyledParagraph>
        </StyledArticle>
        <StyledArticle>
            <StyledLink href="/therapie">
            THERAPIE
            </StyledLink>
        </StyledArticle>
        </StyledNav>
        <Footer />
    </StyledNavSection>
    )
}


const StyledNavSection = styled.section`
width: 100%;
height: 100vh;
background: var(--background);
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
@media (min-width: 800px) {
display: none;
}
`;

const StyledNav = styled.nav`
padding: 1rem;
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
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
font-size: ${({$main}) => ($main ? "4rem" : "3rem")};
opacity: ${({$main}) => ($main ? "1" : "0.5")};
&:hover {
opacity: 1;
}
&:focus {
opacity: 1;
}
`;