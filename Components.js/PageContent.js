import styled from "styled-components";
import PageWrapper from "./Page";
import Image from "next/image";
import Link from "next/link";

export default function PageContent({content, src, alt, liststyle, padding}) {
    return(
         <PageWrapper> 
            <StyledSection> 
            {src &&<StyledImage src={src} alt={alt} width={500} height={500}/>}
            {content && content.map((item, index) => (
                <StyledArticle key={index}>
                    {item.title &&  <StyledH1>{item.title}</StyledH1>}
                    {item.subtitle && <StyledH2>{item.subtitle}</StyledH2>}
       <p>{item.text}</p>
        {item.quote &&  <StyledParagraph $italic>{item.quote}</StyledParagraph> }
        <StyledParagraph>{item.author}</StyledParagraph>
        {item.list && <StyledUl $liststyle={liststyle} $padding={padding}>{item.list.map((listItem, index) => <li key={index}>{listItem}</li>)}</StyledUl>}
{item.href && <div><span>{item.span1}</span>
<StyledLink href={item.href} target="_blank"><span>{item.span2}</span></StyledLink></div>}

                </StyledArticle>
            ))}
        </StyledSection> 
        </PageWrapper> 
            );
}

const StyledSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 1.5rem;
margin-bottom: 1rem;
`;

const StyledImage = styled(Image)`
width: 100%;
height: 30vh;
object-fit: cover;
@media (min-width: 600px) {
height: auto;
}
@media (min-width: 800px) {
height: 40vh;
}
@media (min-width: 1025px) {
height: auto;
}
`;

const StyledArticle = styled.article`
width: 100%;
display: flex;
flex-direction: column;
`;

const StyledH1 = styled.h1`
margin-top: 1.5rem;
margin-bottom: 1rem;
font-weight: 100;
font-size: 2rem;
`;

const StyledH2 = styled.h2`
font-size: 1.2rem;
font-weight: 100;
margin-bottom: 0.2rem;
`;

const StyledParagraph = styled.p`
font-style: ${({$italic}) => ($italic ? "italic" : "none")};
color: ${({$italic}) => ($italic ? "var(--dark-font)" : "var(--background)")};
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: var(--link);
&:hover {
color: var(--background);
}
`;

const StyledUl = styled.ul`
list-style: ${({$liststyle}) => $liststyle};
padding: 1rem 1rem 0 2rem;
padding-left: ${({$padding}) => $padding};
`;