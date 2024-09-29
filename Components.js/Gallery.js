import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import BigImage from "./BigImage";

export default function GallerySection({paintings}) {

    const [show, setShow] = useState(false);
    const [paintingToShow, setPaintingToShow] = useState({});

    const paintingsLength = paintings.length;

    function handleShow(painting) {
        if (painting === painting) {
        setShow(!show);
        setPaintingToShow(painting);
        }
    };
/* 
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
    }; */

    return(
        <StyledSection>
            <StyledArticle>
                {paintings.map((painting, index) => (
                    <StyledButton key={painting.id} onClick={()=>handleShow(painting)}>
                        <StyledImage priority src={painting.src} alt={painting.title} width={500} height={500}/>
                        {show && <BigImage 
                        handleShow={handleShow} 
                        length={paintingsLength}
                        painting={paintingToShow}
                        paintings={paintings}
                     /*    handleNextPainting={handleNextPainting}
                        handlePrevPainting={handlePrevPainting} */
                        />} 
                    </StyledButton>
                ))}
            </StyledArticle>
        </StyledSection>
    )
}

const StyledSection = styled.section`
width: 100%;
height: auto;
padding: 0 3rem 0 3rem;
display: flex;
justify-content: center;
align-items: center;

`;

const StyledArticle = styled.article`
width: 100%;
display: grid;
grid-template-columns: auto;
justify-content: space-evenly;
gap: 1rem 1rem;
@media (min-width: 600px) {
grid-template-columns: auto auto;
}
@media (min-width: 1000px) {
grid-template-columns: auto auto auto;
}
`;

const StyledButton = styled.button`
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
//height: auto;
height: 15rem;
`;