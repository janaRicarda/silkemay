import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import BigImage from "./BigImage";
import { motion } from "framer-motion";

export default function GallerySection({ paintings, title, id }) {
  const [show, setShow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState();

  const paintingToShow = paintings[currentImageIndex];

  const paintingsLength = paintings.length;
  const index = (currentImageIndex % paintingsLength) + 1;

  function handleShow(index) {
    setShow(!show);
    setCurrentImageIndex(index);
  }

  function handlePainting(mode) {
    if (mode === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % paintingsLength);
    } else if (mode === "previous") {
      setCurrentImageIndex(
        (prev) => (prev - 1 + paintingsLength) % paintingsLength
      );
    }
  }

  //* variants for staggered animation of images
  const article = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const button = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <StyledSection key={id}>
      <StyledH2>{title}</StyledH2>  
      <StyledArticle as={motion.article} variants={article} initial="hidden" animate="show">
        {paintings.map((painting, index) => (
          <StyledButton as={motion.button}
            key={painting.id}
            variants={button}
            onClick={() => handleShow(index)}>
            <StyledImage
              src={painting.src}
              alt={painting.title}
              placeholder="blur"
              sizes="(min-width: 600px) 33vw, (min-width: 800px) 50vw,(min-width: 1000px) 33vw,(min-width: 1500px) 25vw, 50vw"
            />
          </StyledButton>
        ))}
      </StyledArticle>
      {show && (
        <BigImage
          handleShow={handleShow}
          handlePainting={handlePainting}
          paintingToShow={paintingToShow}
          length={paintingsLength}
          index={index}
        />
      )}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  padding: 0 3rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const StyledH2 = styled.h2`
  font-weight: 100;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledArticle = styled(motion.article)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  gap: 1rem 1rem;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const StyledButton = styled(motion.button)`
  display: inline-grid;
  cursor: pointer;
  border-style: none;
  background: transparent;
  padding: 0;
  width: inherit;
  height: inherit;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
`;
