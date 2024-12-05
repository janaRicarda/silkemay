import styled from "styled-components";
import Image from "next/image";
import Prev from "../public/chevron-left.svg";
import Next from "../public/chevron-right.svg";
import { useEffect, useRef } from "react";
import PageTransition from "./PageTransition";

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
         <PageTransition>
        <StyledArticle>
          <StyledImage src={src} alt={title} />
          <StyledOuterWrapper>
            <StyledInnerWrapper>
              <StyledParagraph>{paintingToShow.title}</StyledParagraph>
              <p>{paintingToShow.material}</p>
              <p>{paintingToShow.size}</p>
              <p>
                Bild {index} von {length}
              </p>
            </StyledInnerWrapper>
            <StyledButton onClick={handleShow}>close</StyledButton>
          </StyledOuterWrapper>
        </StyledArticle>
        </PageTransition>
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
  width: 100%;
  height: auto;
  padding: 0.5rem;
  background: var(--light-background);
  display: flex;
  flex-direction: column;
  position: relative;
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
font-size: 0.8rem;
`;

const StyledParagraph = styled.p`
  font-style: italic;
`;

const StyledButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  background: transparent;
  border: 0.5px solid var(--dark-font);
  color: var(--dark-font);
  padding: 0.5rem;
  &:hover {
  color: white;
  background: var(--dark-font);
  transition: all 300ms ease-in-out;
  }
`;

const StyledPrev = styled(Prev)`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  fill: var(--light-background);
  opacity: 0.6;
  &:hover {
    transform: scale(1.5);
    opacity: 1;
    transition: 300ms ease-in-out;
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
  width: 5rem;
  height: 5rem;
  fill: var(--light-background);
  opacity: 0.6;
  &:hover {
    transform: scale(1.5);
    opacity: 1;
    transition: 300ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
`;
