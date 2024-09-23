import styled from "styled-components";
import Link from "next/link";

export default function Painting() {
return(
    <StyledLinkWrapper>
        <StyledLink href="/">AKTUELLES</StyledLink>
        <StyledLink href="/">ÖLMALEREI</StyledLink>
        <StyledLink href="/">PAPIERMALEREI</StyledLink>
        <StyledLink href="/">ZEICHNEN</StyledLink>
        <StyledLink href="/">KALLIGRAPHIE</StyledLink>
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
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
`;