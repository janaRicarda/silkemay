import PageWrapper from "../../Components.js/Page";
import styled from "styled-components";

export default function therapyPage() {
    return(
        <PageWrapper height gap={"2rem"}>
        <StyledArticle> 
        <StyledParagraph $quote>&quot;Wenn die Achtsamkeit etwas Schönes berührt, offenbart sich dessen Schönheit. Wenn sie etwas Schmerzvolles berührt, wandelt sie es um und heilt es.&quot;</StyledParagraph>
        <StyledParagraph $accent>Thich Nhat Hanh</StyledParagraph>
        </StyledArticle> 
        <StyledParagraph>Kreative Prozesse und gestalterische Methoden sind die Grundelemente meiner therapeutischen Arbeit. Im Gestalten liegt die Möglichkeit sich ganz in den Moment zu versenken und in der Gegenwart anzukommen.</StyledParagraph>
        <StyledParagraph>
        Mehr finden Sie auf dieser Website
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



