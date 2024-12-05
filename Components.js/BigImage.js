import styled from "styled-components";
import Image from "next/image";
import Prev from "../public/chevron-left.svg";
import Next from "../public/chevron-right.svg";
import { useEffect, useRef } from "react";
import PageTransition from "./PageTransition";
import Close from "../public/close-black.svg";

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
        <PageTransition>
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
            <StyledWrapper>
              <StyledParagraph>{paintingToShow.title}</StyledParagraph>
              <p>{paintingToShow.material}</p>
              <p>{paintingToShow.size}</p>
              <p>
                Bild {index} von {length}
              </p>
            </StyledWrapper>
            <StyledButton onClick={handleShow}><StyledClose/></StyledButton>
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
      </PageTransition>
    </StyledDialog>
  );
}

const StyledDialog = styled.dialog`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background: transparent;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  border: none;
  background-attachment: fixed;
  overflow: hidden;
  &&::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
    @media (max-height: 500px) and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    }
  @media (min-width: 800px) {
  width: auto;
  }
`;

const StyledArticle = styled.article`
  width: 100%;
  height: auto;
  padding: 0.5rem;
  background: var(--light-background);
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-height: 500px) and (max-width: 1000px) {
  flex-direction: row;
  height: 90dvh;
  width: auto;
  gap: 0.5rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
    @media (max-height: 500px) and (max-width: 1000px) {
    opject-fit: contain;
    height: 100%;
    width: auto;
    }
`;

const StyledWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.8rem;
    @media (max-height: 500px) and (max-width: 1000px) {
  justify-content: flex-start;
  width: 100%;
  margin-top: 0;
  }
`;

const StyledParagraph = styled.p`
  font-style: italic;
`;

const StyledButton = styled.button`
  cursor: pointer;
  //align-self: flex-end;
  position: absolute;
  bottom: 0.2rem;
  right: 0;
  background: transparent;
  //border: 0.5px solid var(--dark-font);
  border: none;
  //color: var(--dark-font);
  //padding: 0.5rem;
  opacity: 0.5;
  &:hover {
  //color: white;
  //background: var(--dark-font);
  opacity: 1;
  transform: scale(1.2);
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

const StyledClose = styled(Close)`
width: 1.5rem;
height: 1.5rem;
@media (min-width: 600px) {
width: 2rem;
height: 2rem;
}`;