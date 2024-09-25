import styled from "styled-components";
import Link from "next/link";

export default function Painting({handleMenu}) {
return(
    <StyledLinkWrapper>
        <StyledLink href="/malerei/aktuelles" onClick={handleMenu}>AKTUELLES</StyledLink>
        <StyledLink href="/malerei/oelmalerei" onClick={handleMenu}>ÖLMALEREI</StyledLink>
        <StyledLink href="/malerei/papiermalerei" onClick={handleMenu}>PAPIERMALEREI</StyledLink>
        <StyledLink href="/malerei/zeichnen" onClick={handleMenu}>ZEICHNEN</StyledLink>
        <StyledLink href="/malerei/kalligraphie" onClick={handleMenu}>KALLIGRAPHIE</StyledLink>
    </StyledLinkWrapper>
)
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
top: 18%;
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