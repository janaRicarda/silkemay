import PageWrapper from "../../Components.js/Page";
import styled from "styled-components";

export default function paintingPage() {
    return(
        <PageWrapper height={"100vh"} gap={"2rem"}>
          <StyledArticle> 
       <StyledParagraph $quote>"Kunst ist Magie, befreit von der Lüge, Wahrheit zu sein."</StyledParagraph>
       <StyledParagraph $accent>Theodor W. Adorno</StyledParagraph>
       </StyledArticle> 
       <StyledParagraph>In der Malerei interessieren mich Strukturen, Überlagerungen, Widersprüchlichkeiten, Verdichtungen, Zusammenhänge und das Spiel zwischen transparenten und dichten Flächen.</StyledParagraph>
       <StyledParagraph>
        Eine Auswahl meiner Arbeiten finden Sie auf dieser Website.
       </StyledParagraph>
        </PageWrapper>
    );
}

const StyledArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-left: 5rem;
`;

const StyledParagraph = styled.p`
font-style: ${({$quote}) => ($quote ? "italic" : "none")};
font-size: ${({$quote}) => ($quote ? "1.3rem" : "1.1rem")};
color: ${({$accent}) => ($accent ? "var(--background)" : "var(--dark-font)")}; 
text-align: left;

`;


