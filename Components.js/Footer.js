import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
    return(
        <StyledFooter>
            <StyledLink href="/">VITA</StyledLink>
            <StyledLink href="/">KONTAKT</StyledLink>
            <StyledLink href="/">IMPRESSUM</StyledLink>
            <StyledLink href="/">DATENSCHUTZ</StyledLink>
            <StyledLink href="/">NEWSLETTER</StyledLink>
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
//padding: 0 0.5rem 0.5rem 0.5rem;
padding: 1.5rem;
//z-index: 2;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
opacity: 0.4;
font-size: 0.8rem;
&:hover {
opacity: 1;
}
`;