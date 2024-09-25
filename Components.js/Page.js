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
height: ${({$height}) => $height};
margin: 1rem;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: ${({$gap}) => $gap};
`;
