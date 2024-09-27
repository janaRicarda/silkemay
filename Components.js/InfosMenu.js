import styled from "styled-components";
import Link from "next/link";

export default function Infos({handleMenu}) {
return(
    <StyledLinkWrapper>
        <StyledLink href="/vita" onClick={handleMenu}>VITA</StyledLink>
        <StyledLink href="/kontakt" onClick={handleMenu}>KONTAKT</StyledLink>
        <StyledLink href="/" onClick={handleMenu}>IMPRESSUM</StyledLink>
        <StyledLink href="/" onClick={handleMenu}>DATENSCHUTZ</StyledLink>
        <StyledLink href="/newsletter" onClick={handleMenu}>NEWSLETTER</StyledLink>
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
opacity: 0.5;
&:hover {
opacity: 1;
}
`;