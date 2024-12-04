import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Arrow from "../public/arrow-right.svg";

export default function TherapyMenu({mobileIndexPage}) {
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
    <StyledLinkWrapper $alignment={mobileIndexPage}>
      {linkList.map(({ name, href }, index) => {
        return (
          <StyledLink key={index} href={href} $active={href === pathname} $darkfont={mobileIndexPage}>
              {mobileIndexPage && <StyledArrow/> }
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
margin-right: 2rem;
font-size: 1.5rem;
align-items: ${({$alignment}) => ($alignment ? "flex-start" : "flex-end")};
font-size: ${({$alignment}) => ($alignment ? "1.2rem" : "1.5rem")};
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: ${({$darkfont}) => ($darkfont ? "var(--dark-font)" : "var(--light-font)")};
opacity: ${({$active}) => ($active ? "1" : "0.5")};
&:hover {
opacity: 1;
transition: 300ms ease-in-out;
}
`;

const StyledArrow = styled(Arrow)`
width: 1rem;
height: 1rem;
display: inline-block;
margin-right: 0.5rem;
`;