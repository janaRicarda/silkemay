import Head from "next/head";
import PageWrapper from "../../Components.js/Page";
import styled from "styled-components";
import PaintingMenu from "@/Components.js/PaintingMenu";
import useClientWidth from "@/hooks/useClientWidth";
import PageTransition from "@/Components.js/PageTransition";

export default function PaintingPage() {
  const isMobile = useClientWidth({ operator: "<=", number: 800 });

  return (
    <>
      <Head>
        <title>
          MALEREI | Silke May | Kunsttherapeutin DGKT | Heilpraktikerin für
          Psychotherapie
        </title>
        <meta
          name="description"
          content="Malerei von Silke May - Kunsttherapeutin DGKT, Heilpraktikerin für Psychotherapie, bildende Künstlerin aus Bonn"
        />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta
          property="og:description"
          content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin"
        />
        <meta property="og:type" content="website" />
      </Head>

      <PageWrapper mobileIndexPage height gap={"2rem"}>
        <StyledArticle>
          <StyledParagraph $quote>
            &quot;Kunst ist Magie, befreit von der Lüge, Wahrheit zu sein.&quot;
          </StyledParagraph>
          <StyledParagraph $accent>Theodor W. Adorno</StyledParagraph>
        </StyledArticle>
        <StyledParagraph>
          In der Malerei interessieren mich Strukturen, Überlagerungen,
          Widersprüchlichkeiten, Verdichtungen, Zusammenhänge und das Spiel
          zwischen transparenten und dichten Flächen.
        </StyledParagraph>
        {isMobile && (
          <>
            <StyledDiv>
              <StyledParagraph>
                Eine Auswahl meiner Arbeiten finden Sie hier:
              </StyledParagraph>
              <PaintingMenu mobileIndexPage />
            </StyledDiv>
          </>
        )}
      </PageWrapper>
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 30%;
`;

const StyledParagraph = styled.p`
  font-style: ${({ $quote }) => ($quote ? "italic" : "none")};
  color: ${({ $accent }) =>
    $accent ? "var(--background)" : "var(--dark-font)"};
  text-align: ${({ $quote }) => ($quote ? "justify" : "left")};
  hyphens: auto;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
