import styled from "styled-components";
import Image from "next/image";
import Prev from "../public/chevron-left.svg";
import Next from "../public/chevron-right.svg";
import { useEffect, useRef } from "react";

export default function BigImage({
  handleShow,
  handlePainting,
  paintingToShow,
  length,
  index,
}) {
  //* accessibility: close component when escape is clicked
  useEffect(() => {
    function handleEscapeKey({ code }) {
      if (code === "Escape") {
        handleShow();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  });

  const dialogRef = useRef();

  //* opens dialog for accessibility
  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  const { src, title } = paintingToShow;

  return (
    <StyledDialog ref={dialogRef}>
      <StyledSection>
        <StyledPrev
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              handlePainting("previous");
            }
          }}
          aria-label="previous image"
          onClick={() => handlePainting("previous")}
        />
        <StyledArticle>
          <StyledImage src={src} alt={title} />
          <StyledOuterWrapper>
            <StyledInnerWrapper>
              <p>{paintingToShow.title}</p>
              <p>
                Bild {index} von {length}
              </p>
            </StyledInnerWrapper>
            <StyledButton onClick={handleShow}>close</StyledButton>
          </StyledOuterWrapper>
        </StyledArticle>
        <StyledNext
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              handlePainting("next");
            }
          }}
          aria-label="next image"
          onClick={() => handlePainting("next")}
        />
      </StyledSection>
    </StyledDialog>
  );
}

const StyledDialog = styled.dialog`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: transparent;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  border: none;
  &&::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const StyledSection = styled.section`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const StyledArticle = styled.article`
  width: 90vw;
  height: auto;
  padding: 0.5rem;
  background: var(--light-background);
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 600px) {
    width: 70vw;
  }
  @media (min-width: 1000px) {
    width: 700px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const StyledOuterWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0.5px solid var(--dark-font);
  color: var(--dark-font);
  padding: 0.5rem;
`;

const StyledPrev = styled(Prev)`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  fill: var(--light-background);
  opacity: 0.6;
  @media (min-width: 600px) {
    width: 5rem;
    height: 5rem;
  }
  &:hover {
    transform: scale(1.5);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

const StyledNext = styled(Next)`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  fill: var(--light-background);
  opacity: 0.6;
  @media (min-width: 600px) {
    width: 5rem;
    height: 5rem;
  }
  &:hover {
    transform: scale(1.5);
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;
