import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Painting({handleMenu, mobileIndexPage}) {

    const router = useRouter();
    const aktuellespage = router.pathname === "/malerei/aktuelles";
    const oelPage = router.pathname === "/malerei/oelmalerei";
    const pulpPage = router.pathname === "/malerei/papiermalerei";
    const drawingPage = router.pathname === "/malerei/zeichnen";

return(
    <StyledLinkWrapper $alignment={mobileIndexPage}>
        <StyledLink $active={aktuellespage} $darkfont={mobileIndexPage} href="/malerei/aktuelles" onClick={handleMenu}>AKTUELLES</StyledLink>
        <StyledLink $active={oelPage} $darkfont={mobileIndexPage} href="/malerei/oelmalerei" onClick={handleMenu}>ÖLMALEREI</StyledLink>
        <StyledLink $active={pulpPage} $darkfont={mobileIndexPage} href="/malerei/papiermalerei" onClick={handleMenu}>PAPIERMALEREI</StyledLink>
        <StyledLink $active={drawingPage} $darkfont={mobileIndexPage} href="/malerei/zeichnen" onClick={handleMenu}>ZEICHNEN</StyledLink>
    </StyledLinkWrapper>
)
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