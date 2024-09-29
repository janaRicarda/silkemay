import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

export default function BigImage({ 
    handleShow, 
    length,
  /*   handlePrevPainting,
    handleNextPainting, */
    painting,
    paintings
}) {

    const [paintingToShow, setPaintingToShow] = useState(painting);

    const paintingIndex = paintings.findIndex((painting) => painting === painting);

    const prevPaintingIndex = paintingIndex === 0 ? paintings.length - 1 : paintingIndex - 1;
    const prevPainting = paintings[prevPaintingIndex];

    const nextPaintingIndex = paintingIndex === paintings.length - 1 ? 0 : paintingIndex + 1;
    const nextPainting = paintings[nextPaintingIndex];

    function handlePrevPainting() {
        setPaintingToShow(prevPainting);
    };

    function handleNextPainting() {
            setPaintingToShow(nextPainting);
    };
    
    return(
        <StyledSection>
            <PrevButton onClick={handlePrevPainting}>prev</PrevButton> 
  <StyledArticle>
            <StyledImage src={painting.src} alt={painting.title} width={500} height={500}/>
            <StyledOuterWrapper>
                <StyledInnerWrapper>
                    <p>{painting.title}</p>
                    <p>Bild {painting.id} von {length}</p>
                </StyledInnerWrapper>
            <button onClick={handleShow}>close</button>
            </StyledOuterWrapper>
            </StyledArticle> 
            <NextButton onClick={handleNextPainting}>next</NextButton> 
        </StyledSection>
    )
}

const StyledSection = styled.section`
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index: 2;
`;

const StyledArticle = styled.article`
width: 90vw;
height: auto;
padding: 0.5rem;
background: var(--light-background);
display: flex;
flex-direction: column;
@media (min-width: 600px) {
width: 70vw;
}
@media (min-width: 1000px) {
width: 700px;
}
`;

const StyledImage = styled(Image)`
width: 100%;
height: auto;`;

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

const PrevButton = styled.button``;

const NextButton = styled.button``;