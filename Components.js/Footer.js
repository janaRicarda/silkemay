import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer({ brightFont }) {
  const pathname = useRouter().pathname;

  const linkList = [
    { name: "vita", href: "/vita" },
    { name: "kontakt", href: "/kontakt" },
    { name: "impressum", href: "/impressum" },
    {
      name: "datenschutz",
      href: "/datenschutz",
    },
   /*  {
      name: "newsletter",
      href: "/newsletter",
    }, */
  ];

  return (
    <StyledFooter>
      {linkList.map(({ name, href }, index) => {
        return (
          <StyledLink
            key={index}
            href={href}
            $brightFont={brightFont}
            $active={href === pathname}>
            {name.toUpperCase()}
          </StyledLink>
        );
      })}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ $brightFont }) =>
    $brightFont ? `var(--light-font)` : `var(--dark-font)`};
  opacity: ${({ $active }) => ($active ? "1" : "0.5")};
  font-size: 0.7rem;
  @media (min-width: 600px) {
  font-size: 1rem;
  }
  @media (min-width: 800px) {
  font-size: 0.8rem;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.1);
    transition: 300ms ease-in-out;
  }
`;
