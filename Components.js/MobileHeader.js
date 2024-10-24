import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Menu from "../public/menu.svg";
import Link from "next/link";
import useClientWidth from "@/hooks/useClientWidth";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  const isTablet = useClientWidth(">", 800);

  return (
    <>
      {isTablet && (
        <StyledHeader>
          <StyledLink href="/">SILKE MAY</StyledLink>
          <StyledButton onClick={handleMenu}>
            <StyledMenu />
          </StyledButton>
          {showMenu && <MobileMenu handleMenu={handleMenu} />}
        </StyledHeader>
      )}
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
