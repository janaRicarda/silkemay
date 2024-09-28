import styled from "styled-components";
import Image from "next/image";
import Oil1 from "../public/images/oilpainting/oil1.png";
import { useState } from "react";
import BigImage from "./BigImage";

export default function GallerySection() {

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show);
    }
    return(
        <StyledSection>
            <StyledArticle>
                <StyledButton onClick={handleShow}>
            <StyledImage src={Oil1} alt="oil1" width={500} height={500}/>
            </StyledButton>
            {show && <BigImage handleShow={handleShow} src={Oil1}/>}
            <StyledImage src={Oil1} alt="oil1" width={500} height={500}/>
            <StyledImage src={Oil1} alt="oil1" width={500} height={500}/>
            <StyledImage src={Oil1} alt="oil1" width={500} height={500}/>
            <StyledImage src={Oil1} alt="oil1" width={500} height={500}/>
            <StyledImage src={Oil1} alt="oil1" width={500} height={500}/>
            </StyledArticle>
        </StyledSection>
    )
}

const StyledSection = styled.section`
border: 1px solid black;
width: 100%;
height: auto;
padding: 0 3rem 0 3rem;
display: flex;
justify-content: center;
align-items: center;

`;

const StyledArticle = styled.article`
border: 1px solid red;
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
cursor: pointer;
border-style: none;
background: transparent;
padding: 0;
width: inherit;
height: 100%;
`;

const StyledImage = styled(Image)`
display: inline-grid;
width: 100%;
height: auto;
`;