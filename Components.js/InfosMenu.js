import styled from "styled-components";
import Link from "next/link";

export default function Infos({ handleMenu }) {
  const linkList = [
    { name: "vita", href: "/vita" },
    { name: "kontakt", href: "/kontakt" },
    { name: "impressum", href: "/impressum" },
    { name: "datenschutz", href: "/datenschutz" },
    { name: "newsletter", href: "/newsletter" },
  ];

  return (
    <StyledLinkWrapper>
      {linkList.map(({ name, href }, index) => {
        return (
          <StyledLink key={index} href={href} onClick={handleMenu}>
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--light-font);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
