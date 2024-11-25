import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Menu from "../public/menu.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  const pathname = useRouter().pathname;

  //* closes menu on every route change
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <>
      <StyledHeader>
        <StyledLink href="/">SILKE MAY</StyledLink>
        <StyledButton onClick={handleMenu}>
          <StyledMenu />
        </StyledButton>
        {showMenu && <MobileMenu closeMenu={handleMenu} />}
      </StyledHeader>
    </>
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
  padding: 1rem 2rem 0.5rem 2rem;
  background: white;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--dar-font);
  font-size: 2rem;
`;

const StyledButton = styled.button`
  border-style: none;
  background: transparent;
  padding: 0;
`;

const StyledMenu = styled(Menu)`
  width: 3.5rem;
  height: 3.5rem;
`;
