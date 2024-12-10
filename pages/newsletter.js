import Head from "next/head";
import PageWrapper from "../Components.js/Page";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) setEmail("");

    const data = await response.json();
    setMessage(data.message);
    setTimeout(() => {
      setMessage("");
    }, 4000);
  }

  return (
    <>
      <Head>
        <title>
          NEWSLETTER | Silke May | Kunsttherapeutin DGKT | Heilpraktikerin für
          Psychotherapie
        </title>
        <meta
          name="description"
          content="Newsletter von Silke May - Kunsttherapeutin DGKT, Heilpraktikerin für Psychotherapie, bildende Künstlerin aus Bonn"
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

      <PageWrapper height>
        <StyledH1>NEWSLETTER</StyledH1>
        <StyledArticle>
          <p>
            Wenn Sie meinen Newsletter erhalten möchten, tragen Sie sich bitte
            hier ein:
          </p>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type="email"
              name="email"
              placeholder="Email-Adresse eintragen..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoCapitalize="off"
              autoCorrect="off"
              required
            />
            <StyledButton type="submit">ANMELDEN</StyledButton>
          </StyledForm>
          {message && <StyledDiv>{message}</StyledDiv>}
        </StyledArticle>
        <StyledInfoArticle>
          <p>
            Mit dem Klick auf Anmeldung, erklären Sie sich einverstanden, einen
            Einladungslink für den Newsletter zu erhalten. Solange Sie die
            Einladung nicht annehmen, wird Ihre Emailadresse nicht gespeichert.
          </p>
        </StyledInfoArticle>
      </PageWrapper>
    </>
  );
}

const fadeIn = keyframes`
from {transform: scale(0)}
to {transform: scale(1)}
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  position: relative;
  margin-bottom: 3rem;
`;

const StyledH1 = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 200;
  font-size: 2rem;
  text-align: center;
`;

const StyledForm = styled.form`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  padding: 1rem;
  border: 1px solid var(--background);
`;

const StyledButton = styled.button`
  border-style: none;
  background: var(--background);
  color: var(--light-font);
  font-size: 1.1rem;
  font-weight: 300;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 300ms ease-in-out;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 1rem;
  background: var(--background);
  color: var(--light-font);
  animation: ${fadeIn} 800ms linear forwards;
`;

const StyledInfoArticle = styled.article`
  width: 80%;
  margin: 0 auto;
  font-size: 0.8rem;
  @media (min-width: 1200px) {
    width: 60%;
  }
`;
