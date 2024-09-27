import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
    return(
        <StyledFooter>
            <StyledLink href="/vita">VITA</StyledLink>
            <StyledLink href="/kontakt">KONTAKT</StyledLink>
            <StyledLink href="/">IMPRESSUM</StyledLink>
            <StyledLink href="/">DATENSCHUTZ</StyledLink>
            <StyledLink href="/newsletter">NEWSLETTER</StyledLink>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
gap: 0.2rem;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
opacity: 0.5;
font-size: 0.8rem;
&:hover {
opacity: 1;
}
`;