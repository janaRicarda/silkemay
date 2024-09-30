import styled, {keyframes} from "styled-components";
import Image from "next/image";
import Prev from "../public/chevron-left.svg";
import Next from "../public/chevron-right.svg";
import { useState } from "react";

export default function BigImage({ 
    handleShow, 
    length,
    painting,
    paintings
}) {

    const [paintingToShow, setPaintingToShow] = useState(painting);

    const paintingIndex = paintings.findIndex((painting) => painting === paintingToShow);

    const prevPaintingIndex = paintingIndex === 0 ? paintings.length - 1 : paintingIndex - 1;
    const prevPainting = paintings[prevPaintingIndex];


    const nextPaintingIndex = paintingIndex === length - 1 ? 0 : paintingIndex + 1;
    const nextPainting = paintings[nextPaintingIndex];

    function handlePrevPainting() {
        setPaintingToShow(prevPainting);
    };

    function handleNextPainting() {
            setPaintingToShow(nextPainting);
    };
    
    return(
        <StyledSection>
               <StyledPrev  onClick={handlePrevPainting}/>
    <StyledArticle>
     {/*    <StyledWrapper> */}
     
     
      {/*   </StyledWrapper> */}
            <StyledImage src={paintingToShow.src} alt={paintingToShow.title} width={500} height={500}/>
            <StyledOuterWrapper>
                <StyledInnerWrapper>
                    <p>{paintingToShow.title}</p>
                    <p>Bild {paintingToShow.id} von {length}</p>
                </StyledInnerWrapper>
            <StyledButton onClick={handleShow}>close</StyledButton>
            </StyledOuterWrapper>
            </StyledArticle> 
            <StyledNext onClick={handleNextPainting}/>
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

const StyledWrapper = styled.div`
width: inherit;
padding: 0.5rem;
background: transparent;
position: absolute;
top: 20%;
left: 0;
display: flex;
justify-content: space-between;
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

const PrevButton = styled.button`
cursor: pointer;
background: transparent;
color: var(--light-background);
border-style: none;
padding: 0.5rem;
&:hover {
background: var(--light-background);
color: var(--dark-font);
}
`;

const NextButton = styled.button`
cursor: pointer;
background: transparent;
//color: var(--light-background);
border-style: none;
padding: 0.5rem;
&:hover {
background: var(--light-background);
color: var(--dark-font);
}
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
`;