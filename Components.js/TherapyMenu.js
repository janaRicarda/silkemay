import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TherapyMenu() {
  const pathname = useRouter().pathname;

  const linkList = [
    { name: "kunsttherapie", href: "/therapie/kunsttherapie" },
    { name: "beratung", href: "/therapie/beratung" },
    { name: "kunstvermittlung", href: "/therapie/kunstvermittlung" },
    {
      name: "inklusive kunstprojekte",
      href: "/therapie/inklusive-kunstprojekte",
    },
    { name: "mbsr", href: "/therapie/MBSR" },
    { name: "allgemeines", href: "/therapie/allgemeines" },
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
    bottom: 15%;
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
