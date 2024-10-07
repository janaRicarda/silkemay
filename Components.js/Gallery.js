import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import BigImage from "./BigImage";

export default function GallerySection({paintings, title}) {

    const [show, setShow] = useState(false);
    const [paintingToShow, setPaintingToShow] = useState({});

    const paintingsLength = paintings.length;

    function handleShow(painting) {
        if (painting === painting) {
        setShow(!show);
        setPaintingToShow(painting);
        }
    };

    return(
        <StyledSection>
            <StyledH2>{title}</StyledH2>
            <StyledArticle>
                {paintings.map((painting, index) => (
                    <StyledButton key={painting.id} onClick={()=>handleShow(painting)}>
                        <StyledImage priority src={painting.src} alt={painting.title} width={500} height={500}/>
                    </StyledButton>
                ))}
            </StyledArticle>
            {show && <BigImage 
                        handleShow={handleShow} 
                        length={paintingsLength}
                        painting={paintingToShow}
                        paintings={paintings}
                        />} 
        </StyledSection>
    )
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

const StyledArticle = styled.article`
width: 100%;
display: grid;
grid-template-columns: auto auto;
justify-content: space-evenly;
gap: 1rem 1rem;
@media (min-width: 600px) {
grid-template-columns: auto auto auto;
}
@media (min-width: 800px) {
grid-template-columns: auto auto;
}
@media (min-width: 1000px) {
grid-template-columns: auto auto auto;
}
@media (min-width: 1500px) {
grid-template-columns: auto auto auto auto;
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
height: auto;
aspect-ratio: 1 / 1;
`;