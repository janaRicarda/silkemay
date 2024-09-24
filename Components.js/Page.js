import styled from "styled-components";

export default function PageWrapper({children, title, quote, text1}) {
    return(
        <StyledSection>
           {children}
        </StyledSection>
    );
}

const StyledSection = styled.section`
width: auto;
height: 100vh;
margin: 1rem;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
`;
