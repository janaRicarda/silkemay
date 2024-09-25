import styled from "styled-components";
import Link from "next/link";

export default function Therapy({handleMenu}) {
return(
    <StyledLinkWrapper>
    <StyledLink href="/">KUNSTTHERAPIE</StyledLink>
    <StyledLink href="/">BERATUNG</StyledLink>
    <StyledLink href="/">KUNSTVERMITTLUNG</StyledLink>
    <StyledLink href="/">INKLUSIVE KUNSTPROJEKTE</StyledLink>
    <StyledLink href="/">MBSR</StyledLink>
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
@media (min-width: 800px) {
position: absolute;
bottom: 15%;
right: 5%;
}
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
opacity: 0.5;
&:hover {
opacity: 1;
}
`;