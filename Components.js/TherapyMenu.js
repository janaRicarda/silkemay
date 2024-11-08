import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Therapy({handleMenu, mobileIndexPage}) {

    const router = useRouter();

    const kunsttherapiePage = router.pathname === "/therapie/kunsttherapie";
    const beratungPage = router.pathname === "/therapie/beratung";
    const kunstvermittlungPage = router.pathname === "/therapie/kunstvermittlung";
    const kunstprojektePage = router.pathname === "/therapie/inklusive-kunstprojekte";
    const mbsrPage = router.pathname === "/therapie/MBSR";
    const allgemeinesPage = router.pathname === "/therapie/allgemeines";

return(
    <StyledLinkWrapper $alignment={mobileIndexPage}>
    <StyledLink $active={kunsttherapiePage} $darkfont={mobileIndexPage} href="/therapie/kunsttherapie" onClick={handleMenu}>KUNSTTHERAPIE</StyledLink>
    <StyledLink $active={beratungPage} $darkfont={mobileIndexPage} href="/therapie/beratung" onClick={handleMenu}>BERATUNG</StyledLink>
    <StyledLink $active={kunstvermittlungPage} $darkfont={mobileIndexPage} href="/therapie/kunstvermittlung" onClick={handleMenu}>KUNSTVERMITTLUNG</StyledLink>
    <StyledLink $active={kunstprojektePage} $darkfont={mobileIndexPage} href="/therapie/inklusive-kunstprojekte" onClick={handleMenu}>INKLUSIVE KUNSTPROJEKTE</StyledLink>
    <StyledLink $active={mbsrPage} $darkfont={mobileIndexPage} href="/therapie/MBSR" onClick={handleMenu}>MBSR</StyledLink>
    <StyledLink $active={allgemeinesPage} $darkfont={mobileIndexPage} href="/therapie/allgemeines" onClick={handleMenu}>ALLGEMEINES</StyledLink>
    </StyledLinkWrapper>
);
}

const StyledLinkWrapper = styled.article`
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: ${({$alignment}) => ($alignment ? "flex-start" : "flex-end")};
font-size: ${({$alignment}) => ($alignment ? "1.2rem" : "1.5rem")};
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: ${({$darkfont}) => ($darkfont ? "var(--dark-font)" : "var(--light-font)")};
opacity: ${({$active}) => ($active ? "1" : "0.5")};
&:hover {
opacity: 1;
}
`;