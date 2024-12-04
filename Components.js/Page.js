import styled from "styled-components";

export default function PageWrapper({children, mobileIndexPage, height, gap}) {
    return(
        <StyledSection $height={height} $gap={gap} $padding={mobileIndexPage}>
           {children}
        </StyledSection>
    );
}

const StyledSection = styled.section`
width: auto;
height: ${({$height}) => ($height ? "calc(100vh - 80px)" : "auto")};
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

/* war das wichtig?
@media (min-width: 1000px) {
padding: ${({$padding}) => ($padding ? "0 10% 0 10%": "0 1rem 3rem 1rem")};
}
*/
