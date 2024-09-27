import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Menu from "../public/menu.svg";
import Link from "next/link";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu);
    }

return(
    <StyledHeader>
        <StyledLink href="/">SILKE MAY</StyledLink>
        <StyledButton onClick={handleMenu}><StyledMenu /></StyledButton>
        {showMenu && <MobileMenu handleMenu={handleMenu}/>}
        </StyledHeader>
);
}

const StyledHeader = styled.header`
position: sticky;
top: 0;
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem 0.5rem 3rem;
background: white;
@media(min-width: 800px) {
display: none;
}
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--dar-font);
font-size: 1.5rem;
`;

const StyledButton = styled.button`
border-style: none;
background: transparent;
`;

const StyledMenu = styled(Menu)`
width: 3rem;
height: 3rem;
`;