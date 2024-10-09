import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Therapy({handleMenu}) {

    const router = useRouter();

    const kunsttherapiePage = router.pathname === "/therapie/kunsttherapie";
    const beratungPage = router.pathname === "/therapie/beratung";
    const kunstvermittlungPage = router.pathname === "/therapie/kunstvermittlung";
    const kunstprojektePage = router.pathname === "/therapie/inklusive-kunstprojekte";
    const mbsrPage = router.pathname === "/therapie/MBSR";
    const allgemeinesPage = router.pathname === "/therapie/allgemeines";

return(
    <StyledLinkWrapper>
    <StyledLink $active={kunsttherapiePage} href="/therapie/kunsttherapie" onClick={handleMenu}>KUNSTTHERAPIE</StyledLink>
    <StyledLink $active={beratungPage} href="/therapie/beratung" onClick={handleMenu}>BERATUNG</StyledLink>
    <StyledLink $active={kunstvermittlungPage} href="/therapie/kunstvermittlung" onClick={handleMenu}>KUNSTVERMITTLUNG</StyledLink>
    <StyledLink $active={kunstprojektePage} href="/therapie/inklusive-kunstprojekte" onClick={handleMenu}>INKLUSIVE KUNSTPROJEKTE</StyledLink>
    <StyledLink $active={mbsrPage} href="/therapie/MBSR" onClick={handleMenu}>MBSR</StyledLink>
    <StyledLink $active={allgemeinesPage} href="/therapie/allgemeines" onClick={handleMenu}>ALLGEMEINES</StyledLink>
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
opacity: ${({$active}) => ($active ? "1" : "0.5")};
&:hover {
opacity: 1;
}
`;