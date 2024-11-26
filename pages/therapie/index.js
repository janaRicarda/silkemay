import Head from "next/head";
import PageWrapper from "../../Components.js/Page";
import styled from "styled-components";
import Therapy from "@/Components.js/TherapyMenu";

export default function TherapyPage() {
    return(
        <>
         <Head>
        <title>THERAPIE | Silke May | Kunsttherapeutin DGKT | Heilpraktikerin für Psychotherapie</title>
        <meta name="description" content="Therapieangebot von Silke May - Kunsttherapeutin DGKT, Heilpraktikerin für Psychotherapie, bildende Künstlerin aus Bonn" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta property="og:description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta property="og:type" content="website" />
      </Head>
        <PageWrapper height gap={"2rem"}>
        <StyledArticle> 
        <StyledParagraph $quote>&quot;Wenn die Achtsamkeit etwas Schönes berührt, offenbart sich dessen Schönheit. Wenn sie etwas Schmerzvolles berührt, wandelt sie es um und heilt es.&quot;</StyledParagraph>
        <StyledParagraph $accent>Thich Nhat Hanh</StyledParagraph>
        </StyledArticle> 
        <StyledParagraph>Kreative Prozesse und gestalterische Methoden sind die Grundelemente meiner therapeutischen Arbeit. Im Gestalten liegt die Möglichkeit sich ganz in den Moment zu versenken und in der Gegenwart anzukommen.</StyledParagraph>
        <StyledParagraph>
        Mehr finden Sie auf dieser Website.
        </StyledParagraph>
        <StyledDiv>
        <Therapy mobileIndexPage />
        </StyledDiv>
        </PageWrapper>
        </>
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
text-align: ${({$quote}) => ($quote ? "justify" : "left")};
`;

const StyledDiv = styled.div`
display: flex;
@media (min-width: 800px) {
display: none;
}
`;



