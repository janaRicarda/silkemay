import styled from "styled-components";
import { consultation } from "@/lib/data";
import PageWrapper from "@/Components.js/Page";

export default function BeratungPage() {
    return(
<PageWrapper height={"auto"} gap={"1rem"}>
    {consultation.map((item, index) => (
        <StyledArticle key={index}>
<StyledH1>{item.title}</StyledH1>
<StyledParagraph>{item.quote}</StyledParagraph> 
<p>{item.text}</p>
        </StyledArticle>
    ))}
</PageWrapper>
    );
}

const StyledArticle = styled.article`
width: 100%;
display: flex;
flex-direction: column;
`;

const StyledH1 = styled.h1`
margin-bottom: 1rem;
font-weight: 300;
`;

const StyledParagraph = styled.p`
font-style: italic;
`;