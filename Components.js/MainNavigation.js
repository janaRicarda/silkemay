import styled from "styled-components";
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
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-height: 400px) and (max-width: 700px) {
  margin-right: 6rem;
}
`;
