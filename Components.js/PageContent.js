import styled from "styled-components";
import PageWrapper from "./Page";
import Image from "next/image";

export default function PageContent({content, src, alt}) {
    return(
         <PageWrapper height={"auto"} gap={"0"}> 
            <StyledSection> 
            <StyledImage src={src} alt={alt} width={500} height={500}/>
            {content.map((item, index) => (
                <StyledArticle key={index}>
                    {item.title &&  <StyledH1>{item.title}</StyledH1>}
       
        {item.quote &&  <StyledParagraph>{item.quote}</StyledParagraph> }
       
        <p>{item.text}</p>
                </StyledArticle>
            ))}
           </StyledSection> 
         </PageWrapper> 
            );
}

const StyledSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;
`;

const StyledImage = styled(Image)`
width: 100%;
height: auto;
`;

const StyledArticle = styled.article`
width: 100%;
display: flex;
flex-direction: column;
`;

const StyledH1 = styled.h1`
margin-top: 2rem;
margin-bottom: 1rem;
font-weight: 300;
`;

const StyledParagraph = styled.p`
font-style: italic;
`;