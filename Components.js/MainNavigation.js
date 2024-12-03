import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import PaintingMenu from "./PaintingMenu";
import TherapyMenu from "./TherapyMenu";
import useClientWidth from "@/hooks/useClientWidth";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

export default function MainNavigation() {
  const [showMenu, setShowMenu] = useState({
    paintingMenu: false,
    therapyMenu: false,
  });

  const router = useRouter();

  const { paintingMenu, therapyMenu } = showMenu;

  /*
   * if key: sets all keys in showMenu false and provided key to true
   * if no key: sets all keys in showMenu to false
   */
  function handleMenus(key) {
    setShowMenu((prev) => {
      const allFalse = Object.fromEntries(
        Object.keys(prev).map((key) => [key, false])
      );

      return key ? { ...allFalse, [key]: !prev[key] } : { ...allFalse };
    });
  }

  const isDesktop = useClientWidth({ operator: ">", number: 800 });

  const navList = [
    { name: "malerei", href: "/malerei", key: "paintingMenu" },
    {
      name: isDesktop ? "silke May" : "startseite",
      href: "/",
      main: true,
    },
    { name: "therapie", href: "/therapie", key: "therapyMenu" },
  ];

  return (
    <>
      <StyledNav>
        {paintingMenu && <PaintingMenu />}
        {navList.map(({ name, href, main, key }, index) => (
          <StyledArticle key={index}>
            <NavLink
              main={main}
              isLink={isDesktop ? true : false}
              name={name}
              href={href}
              clickFunction={() => {
                if (href === "/") {
                  router.push("/");
                  handleMenus();
                } else handleMenus(key);
              }}
            />
          </StyledArticle>
        ))}
        {therapyMenu && <TherapyMenu />}
      </StyledNav>
    </>
  );
}

const StyledNav = styled.nav`
  padding: 1rem;
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
  font-size: ${({ $main }) => ($main ? "4rem" : "3rem")};
  opacity: ${({ $main }) => ($main ? "1" : "0.5")};
  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
  }
`;

const StyledMenuButton = styled.button`
  border-style: none;
  background: transparent;
  font-size: 2.5rem;
  padding: 0;
  color: var(--light-font);
`;
