import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu);
    }

return(
<>
        <StyledButton onClick={handleMenu}>MENU</StyledButton>
        {showMenu && <MobileMenu handleMenu={handleMenu}/>}
        </>
);
}

const StyledHeader = styled.header`

`;

const StyledButton = styled.button`
position: fixed;
top: 0;
right: 0;
border-style: none;
background: transparent;
color: var(--background);
margin: 1rem;
@media(min-width: 800px) {
display: none;
}
`;