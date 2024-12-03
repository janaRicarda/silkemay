import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PaintingMenu({ mobileIndexPage }) {
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
    <StyledLinkWrapper $alignment={mobileIndexPage}>
      {linkList.map(({ name, href }, index) => {
        return (
          <StyledLink
            key={index}
            href={href}
            $active={href === pathname}
            $darkfont={mobileIndexPage}>
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
  align-items: ${({ $alignment }) => ($alignment ? "flex-start" : "flex-end")};
  font-size: ${({ $alignment }) => ($alignment ? "1.2rem" : "1.5rem")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ $darkfont }) =>
    $darkfont ? "var(--dark-font)" : "var(--light-font)"};
  opacity: ${({ $active }) => ($active ? "1" : "0.5")};
  &:hover {
    opacity: 1;
  }
`;
