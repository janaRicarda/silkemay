import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Menu from "../public/menu.svg";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu);
    }

return(
<>
        <StyledButton onClick={handleMenu}><StyledMenu /></StyledButton>
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
//backdrop-filter: blur(12.6px);
//webkit-backdrop-filter: blur(12.6px);
color: var(--background);
margin: 1rem 1rem 1rem 0;
@media(min-width: 800px) {
display: none;
}
`;

const StyledMenu = styled(Menu)`
width: 3rem;
height: 3rem;
`;