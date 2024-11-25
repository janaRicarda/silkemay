import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const pathname = useRouter().pathname;

  const linkList = [
    { name: "vita", href: "/vita" },
    { name: "kontakt", href: "/kontakt" },
    { name: "impressum", href: "/impressum" },
    {
      name: "datenschutz",
      href: "/datenschutz",
    },
    {
      name: "newsletter",
      href: "/newsletter",
    },
  ];

  return (
    <StyledFooter>
      {linkList.map(({ name, href }, index) => {
        return (
          <StyledLink key={index} href={href} $active={href === pathname}>
            {name.toUpperCase()}
          </StyledLink>
        );
      })}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  gap: 0.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--light-font);
  opacity: ${({ $active }) => ($active ? "1" : "0.5")};
  font-size: 0.8rem;
  &:hover {
    opacity: 1;
  }
`;
