import Link from "next/link";
import styled from "styled-components";

export default function NavLink({ name, href, main, isLink, clickFunction }) {
  return (
    <>
      {isLink ? (
        <StyledLink $main={main} onClick={clickFunction} href={href}>
          {name.toUpperCase()}
        </StyledLink>
      ) : (
        <StyledMenuButton $main={main} onClick={clickFunction}>
          {name.toUpperCase()}
        </StyledMenuButton>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--light-font);
  font-size: ${({ $main }) => ($main ? "4rem" : "3rem")};
  opacity: ${({ $main }) => ($main ? "1" : "0.5")};
  &:hover {
    opacity: 1;
    transition: 300ms ease-in-out;
  }
  &:focus {
    opacity: 1;
  }
`;

const StyledMenuButton = styled.button`
cursor: pointer;
  border-style: none;
  background: transparent;
  font-size: 2.5rem;
  padding: 0;
  color: var(--light-font);
  &:hover {
  transform: scale(1.05);
  transition: 300ms ease-in-out;
  }
`;
