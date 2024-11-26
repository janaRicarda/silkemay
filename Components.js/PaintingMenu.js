import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PaintingMenu() {
  const pathname = useRouter().pathname;

  const linkList = [
    { name: "aktuelles", href: "/malerei/aktuelles" },
    { name: "ölmalerei", href: "/malerei/oelmalerei" },
    { name: "papiermalerei", href: "/malerei/papiermalerei" },
    {
      name: "zeichnen",
      href: "/malerei/zeichnen",
    },
  ];

  return (
    <StyledLinkWrapper>
      {linkList.map(({ name, href }, index) => {
        return (
          <StyledLink key={index} href={href} $active={href === pathname}>
            {name.toUpperCase()}
          </StyledLink>
        );
      })}
    </StyledLinkWrapper>
  );
}

const StyledLinkWrapper = styled.article`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.5rem;
  @media (min-width: 800px) {
    position: absolute;
    top: 23%;
    right: 5%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--light-font);
  opacity: ${({ $active }) => ($active ? "1" : "0.5")};
  &:hover {
    opacity: 1;
  }
`;
