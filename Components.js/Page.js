import styled from "styled-components";

export default function PageWrapper({children, title, quote, text1}) {
    return(
        <StyledSection>
           {children}
        </StyledSection>
    );
}

const StyledSection = styled.section`
width: 100%;
height: 100vh;
margin-left: 1rem;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 2rem;
`;
