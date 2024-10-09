import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {

    const router = useRouter();

    const vitaPage = router.pathname === "/vita";
    const kontaktPage = router.pathname === "/kontakt";
    const impressumPage = router.pathname === "/impressum";
    const datenschutzPage = router.pathname === "/datenschutz";
    const newsletterPage = router.pathname === "/newsletter";

    return(
        <StyledFooter>
            <StyledLink $active={vitaPage} href="/vita">VITA</StyledLink>
            <StyledLink $active={kontaktPage} href="/kontakt">KONTAKT</StyledLink>
            <StyledLink $active={impressumPage} href="/impressum">IMPRESSUM</StyledLink>
            <StyledLink $active={datenschutzPage} href="/datenschutz">DATENSCHUTZ</StyledLink>
            <StyledLink $active={newsletterPage} href="/newsletter">NEWSLETTER</StyledLink>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
position: absolute;
bottom: 1rem;
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
opacity: ${({$active}) => ($active ? "1" : "0.5")};
font-size: 0.8rem;
&:hover {
opacity: 1;
}
`;