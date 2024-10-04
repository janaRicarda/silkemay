import styled from "styled-components";

export default function PageWrapper({children, height, gap}) {
    return(
        <StyledSection $height={height} $gap={gap}>
           {children}
        </StyledSection>
    );
}

const StyledSection = styled.section`
width: auto;
height: ${({$height}) => ($height ? "85vh" : "auto")};
margin: 0 1rem 0 1rem;
padding: 0 1rem 1rem 1rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: ${({$gap}) => $gap};
@media (min-width: 800px) {
height: ${({$height}) => ($height ? "100vh" : "auto")};
margin: 1rem 1rem 0 1rem;
}
`;
