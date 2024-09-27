import Link from "next/link";
import PageWrapper from "../Components.js/Page";
import styled from "styled-components";

export default function newsletterPage() {
    return(
        <PageWrapper height={"100vh"} align={"center"}>
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
padding: 0.5rem;
border: 1px solid var(--dark-font);
`;

const StyledButton = styled.button`
border-style: none;
background: var(--background);
opacity: 0.8;
color: var(--light-font);
font-size: 1.1rem;
font-weight: 300;
padding: 0.5rem;
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
color: var(--dark-font);
&:hover {
color: var(--background);
}
`;
