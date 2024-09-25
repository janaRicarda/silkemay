import styled from "styled-components";
import { generalInfos } from "@/lib/data";
import PageWrapper from "@/Components.js/Page";

export default function AllgemeinesPage() {
    return(
<PageWrapper height={"auto"} gap={"1rem"}>
    {generalInfos.map((info, index) => (
        <StyledArticle key={index}>
 <StyledH1>{info.title}</StyledH1>
 <p>{info.text}</p>
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