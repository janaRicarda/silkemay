import styled, {keyframes} from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import Painting from "./PaintingMenu";
import Therapy from "./TherapyMenu";


export default function MainNavigation({indexPage}) {
const [showPainting, setShowPainting] = useState(false);
const [showTherapy, setShowTherapy] = useState(false);

function handleShowPainting() {
    setShowPainting(!showPainting);
    setShowTherapy(false);
}

function handleShowTherapy() {
    setShowTherapy(!showTherapy);
    setShowPainting(false);
}

function handleRemoveMenus() {
    setShowPainting(false);
    setShowTherapy(false);
}

    return(
        <>
        <StyledNavSection>
            <StyledNav>
            {showPainting && <Painting />}
            <StyledArticle> 
                <StyledLink href="/malerei" onClick={handleShowPainting}>
                MALEREI
                </StyledLink>
                <StyledLink $main href="/" onClick={handleRemoveMenus}>SILKE MAY</StyledLink>
                <StyledLink href="/therapie" onClick={handleShowTherapy}>
                THERAPIE
                </StyledLink> 
            </StyledArticle> 
            {showTherapy && <Therapy />}
            </StyledNav>
            <Footer />
        </StyledNavSection>
        </>
    );
}


const StyledNavSection = styled.section`
display: none;
@media (min-width: 800px) {
width: 100%;
height: 100vh;
background: var(--background);
flex-direction: column;
justify-content: center;
align-items: flex-end;
display: flex;
width: 400px;
//width: 45vw;
position: fixed;
top: 0;
left: 0; 
}
`;

const StyledNav = styled.nav`
padding: 1rem;
//border: 1px solid yellow;
`;

const StyledArticle = styled.article`
//border: 1px solid blue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
font-size: ${({$main}) => ($main ? "4rem" : "3rem")};
opacity: ${({$main}) => ($main ? "1" : "0.5")};
&:hover {
opacity: 1;
}
&:focus {
opacity: 1;
}
`;

