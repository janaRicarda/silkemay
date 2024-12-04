import Head from "next/head";
import styled from "styled-components";
import MobileLandingPage from "@/Components.js/MobileLandingPage";
import useClientWidth from "@/hooks/useClientWidth";
import PageTransition from "@/Components.js/PageTransition";

export default function Home() {
  const isMobile = useClientWidth({ operator: "<=", number: 800 });

  return (
    <>
      <Head>
        <title>HOME | Silke May | Kunsttherapeutin DGKT | Heilpraktikerin für Psychotherapie</title>
        <meta name="description" content="Silke May - Kunsttherapeutin DGKT, Heilpraktikerin für Psychotherapie, bildende Künstlerin aus Bonn" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta
          property="og:description"
          content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTransition>
      {isMobile ? (
        <MobileLandingPage />
      ) : (
        <StyledContentSection>
          <StyledParagraph>
            KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE /
            BILDENDE KÜNSTLERIN
          </StyledParagraph>
        </StyledContentSection>
      )}
      </PageTransition>
    </>
  );
}

const StyledContentSection = styled.section`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
    height: 100vh;
    background: var(--background);
  }
`;

const StyledParagraph = styled.p`
  color: var(--light-font);
  text-align: right;
  text-align: ${({ $mobile }) => ($mobile ? "right" : "left")};
  @media (min-width: 800px) {
    display: ${({ $mobile }) => ($mobile ? "none" : "block")};
  }
`;
