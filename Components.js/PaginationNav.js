import styled from "styled-components";
import Back from "../public/arrow-left.svg";
import Forward from "../public/arrow-right.svg";

export default function PaginationNav({ currentPage, onPageChange, pages }) {
  return (
    <StyledList>
      <StyledDiv>
        {currentPage != 1 && (
          <StyledButton
            aria-label="previous page"
            onClick={() => onPageChange("previous")}>
            <StyledBack />
          </StyledButton>
        )}
        <p> Seite {currentPage} von 7</p>
        {currentPage != 7 && (
          <StyledButton
            aria-label="next page"
            onClick={() => onPageChange("next")}>
            <StyledForward />
          </StyledButton>
        )}
      </StyledDiv>
      <StyledDiv>
        {pages.map((page) => (
          <StyledListItem $itemActive={page === currentPage} key={page}>
            <a onClick={() => onPageChange(page)}>{page}</a>
          </StyledListItem>
        ))}
      </StyledDiv>
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const StyledListItem = styled.li`
  background: ${({ $itemActive }) =>
    $itemActive ? "var(--dark-font)" : "var(--link)"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $itemActive }) => ($itemActive ? "1.2rem" : "0.8rem")};
  height: ${({ $itemActive }) => ($itemActive ? "1.2rem" : "0.8rem")};
  border-radius: 50%;
  cursor: ${({ $itemActive }) => ($itemActive ? "none" : "pointer")};
  color: transparent;
  &:hover {
    background: ${({ $itemActive }) =>
      $itemActive ? "var(--dark-font)" : "var(--background)"};
  }
`;

const StyledButton = styled.button`
  border-style: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

const StyledBack = styled(Back)`
  width: 2rem;
  height: 2rem;
`;

const StyledForward = styled(Forward)`
  width: 2rem;
  height: 2rem;
`;
