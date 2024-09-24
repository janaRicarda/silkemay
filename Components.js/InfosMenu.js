import styled from "styled-components";
import Link from "next/link";

export default function Infos() {
return(
    <StyledLinkWrapper>
        <StyledLink href="/">VITA</StyledLink>
        <StyledLink href="/">KONTAKT</StyledLink>
        <StyledLink href="/">IMPRESSUM</StyledLink>
        <StyledLink href="/">DATENSCHUTZ</StyledLink>
        <StyledLink href="/">NEWSLETTER</StyledLink>
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