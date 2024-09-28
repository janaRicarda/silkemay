import styled from "styled-components";
import Image from "next/image";

export default function BigImage({handleShow, src}) {
    return(
        <StyledSection>
            <StyledArticle>
            <StyledImage src={src} alt="bild" width={500} height={500}/>
            <StyledOuterWrapper>
                <StyledInnerWrapper>
                    <p>title</p>
                    <p>bild 1 von 12</p>
                </StyledInnerWrapper>
            <button onClick={handleShow}>close</button>
            </StyledOuterWrapper>
            </StyledArticle>
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
`;