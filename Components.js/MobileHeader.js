import styled from "styled-components";
import MobileNavigation from "./MobileNavigation";
import { useEffect, useState } from "react";
import Menu from "../public/menu.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

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
        {showMenu && <MobileNavigation closeMenu={handleMenu} />}
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
  padding: 1rem 1.2rem 0.5rem 2rem;
  background: white;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--dar-font);
  font-size: 2rem;
  font-weight: 200;
  &:hover {
    transform: scale(1.05);
    transition: 300ms ease-in-out;
  }
`;

const StyledButton = styled.button`
  border-style: none;
  background: transparent;
  padding: 0;
`;

const StyledMenu = styled(Menu)`
  width: 3.8rem;
  height: 3.8rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: 300ms ease-in-out;
  }
`;
