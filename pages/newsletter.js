import Head from "next/head";
import Link from "next/link";
import PageWrapper from "../Components.js/Page";
import styled from "styled-components";

export default function newsletterPage() {
    return(
        <>
         <Head>
        <title>NEWSLETTER - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE</title>
        <meta name="description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta property="og:description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta property="og:type" content="website" />
      </Head>
        <PageWrapper height>
        <StyledArticle>
            <StyledH1>NEWSLETTER</StyledH1>
            <p>Wenn Sie einen Newsletter erhalten möchten,
            tragen Sie sich bitte hier ein:</p>
            <StyledForm>
            <StyledInput type="email" placeholder="Email-Adresse eintragen.." required/>
            <StyledButton type="submit">Anmelden</StyledButton>
            </StyledForm>
            <p>Wenn Sie sich abmelden wollen,
            folgen Sie bitte diesem <span><StyledLink href="/">Link</StyledLink></span>.</p>
        </StyledArticle>
        </PageWrapper>
        </>
    );
}

const StyledArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
gap: 1rem;
`;

const StyledH1 = styled.h1`
margin-top: 1.5rem;
margin-bottom: 1rem;
font-weight: 100;
font-size: 2rem;
`;

const StyledForm = styled.form`
width: 20rem;
display: flex;
flex-direction: column;
gap: 1rem;
`;

const StyledInput = styled.input`
padding: 1rem;
border: 0.5px solid var(--dark-font);
`;

const StyledButton = styled.button`
border-style: none;
background: var(--background);
opacity: 0.8;
color: var(--light-font);
font-size: 1.1rem;
font-weight: 300;
padding: 1rem;
z-index: -1;
&:hover {
opacity: 1;
}
@media (min-width: 800px) {
cursor: pointer;
z-index: 1;
}
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--link);
&:hover {
color: var(--background);
}
`;
