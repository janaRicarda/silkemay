import styled from "styled-components";
import Link from "next/link";

export default function Therapy({handleMenu}) {
return(
    <StyledLinkWrapper>
    <StyledLink href="/therapie/kunsttherapie" onClick={handleMenu}>KUNSTTHERAPIE</StyledLink>
    <StyledLink href="/therapie/beratung" onClick={handleMenu}>BERATUNG</StyledLink>
    <StyledLink href="/therapie/kunstvermittlung" onClick={handleMenu}>KUNSTVERMITTLUNG</StyledLink>
    <StyledLink href="/therapie/inklusive-kunstprojekte" onClick={handleMenu}>INKLUSIVE KUNSTPROJEKTE</StyledLink>
    <StyledLink href="/therapie/MBSR" onClick={handleMenu}>MBSR</StyledLink>
    <StyledLink href="/therapie/allgemeines" onClick={handleMenu}>ALLGEMEINES</StyledLink>
    </StyledLinkWrapper>
);
}

const StyledLinkWrapper = styled.article`
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
font-size: 1.5rem;
/* @media (min-width: 800px) {
position: absolute;
bottom: 15%;
right: 5%;
} */
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
opacity: 0.5;
&:hover {
opacity: 1;
}
`;