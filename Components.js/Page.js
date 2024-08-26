import styled from "styled-components";

export default function PageWrapper({children, title, quote, text1}) {
    return(
        <StyledSection>
            <StyledHeader>{title.toUpperCase()}</StyledHeader>
            <StyledArticle>
                {quote}
            </StyledArticle>
            <StyledArticle>
                {text1}
            </StyledArticle>
            {children}
        </StyledSection>
    );
}

const StyledSection = styled.section`
width: 100%;
height: calc(100vh - 123.5px);
margin-top: 123.5px;
padding: 2rem;
background: var(--light-background);
color: var(--dark-font);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 2rem;
`;

const StyledHeader = styled.header`
width: 100%;
position: absolute;
top: 0;
display: flex;
justify-content: center;
align-items: center;
background: var(--background);
color: var(--light-font);
font-size: 4rem;
font-weight: 300;
letter-spacing: 2px;
padding: 1.5rem;
`;

const StyledArticle = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;