import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Painting({handleMenu}) {

    const router = useRouter();
    const aktuellespage = router.pathname === "/malerei/aktuelles";
    const oelPage = router.pathname === "/malerei/oelmalerei";
    const pulpPage = router.pathname === "/malerei/papiermalerei";
    const drawingPage = router.pathname === "/malerei/zeichnen";

return(
    <StyledLinkWrapper>
        <StyledLink $active={aktuellespage} href="/malerei/aktuelles" onClick={handleMenu}>AKTUELLES</StyledLink>
        <StyledLink $active={oelPage} href="/malerei/oelmalerei" onClick={handleMenu}>ÖLMALEREI</StyledLink>
        <StyledLink $active={pulpPage} href="/malerei/papiermalerei" onClick={handleMenu}>PAPIERMALEREI</StyledLink>
        <StyledLink $active={drawingPage} href="/malerei/zeichnen" onClick={handleMenu}>ZEICHNEN</StyledLink>
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
/* @media (min-width: 800px) {
position: absolute;
top: 19%;
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