import styled, {keyframes} from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function MainNavigation() {
    return(
        <StyledSection>
            <StyledArticle>
                <StyledLink href="/painting">
                MALEREI
                </StyledLink>
            </StyledArticle>
            <StyledArticle>
                <StyledH1>SILKE MAY</StyledH1>
            </StyledArticle>
            <StyledArticle>
                <StyledLink href="/">
                THERAPIE
                </StyledLink>
            </StyledArticle>
        </StyledSection>
    );
}


const StyledSection = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding-right: 1rem;
@media (min-width: 800px) {
width: 400px;
position: fixed;
top: 0;
left: 0;
}
`;

const StyledArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--light-font);
font-size: 3rem;
opacity: 0.4;
&:hover {
opacity: 1;
}
&:focus {
opacity: 1;
}
`;

const StyledH1 = styled.h1`
font-size: 4rem;
font-weight: 100;
color: var(--light-font);
`;

const StyledH2 = styled.h2`


`;

const StyledButton = styled.button`
border-style: none;
background: transparent;
font-size: 4rem;
font-weight: 100;
color: var(--light-font);
opacity: 0.4;
&:hover {
opacity: 1;
}
&:focus {
opacuty: 1;}
`;