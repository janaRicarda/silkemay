import styled from "styled-components";
import PageWrapper from "./Page";
import Image from "next/image";
import Link from "next/link";

export default function PageContent({ content, src, alt, liststyle, padding}) {
  return (
    <PageWrapper>
      <StyledSection>
        {src && (
          <StyledImage priority src={src} alt={alt} width={500} height={500} />
        )}
        {content &&
          content.map((item, index) => (
            <StyledArticle key={index}>
              {item.title && <StyledH1>{item.title}</StyledH1>}
              {item.subtitle && <StyledH2>{item.subtitle}</StyledH2>}
              <p>{item.text}</p>
              {item.quote && (
                <StyledParagraph $italic>{item.quote}</StyledParagraph>
              )}
              <StyledParagraph>{item.author}</StyledParagraph>
              {item.list && (
                <StyledUl $liststyle={liststyle} $padding={padding}>
                  {item.list.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </StyledUl>
              )}
              {item.href && (
                <div>
                  <span>{item.span1}</span>
                  <StyledLink href={item.href} target="_blank">
                    <span>{item.span2}</span>
                  </StyledLink>
                  {item.span3 && <span>{item.span3}</span>}
                  {item.href2 && (
                    <StyledLink href={item.href2} target="_blank">
                      <span>{item.span4}</span>
                    </StyledLink>
                  )}
                  {item.span5 && <span>{item.span5}</span>}
                </div>
              )}

              {item.orderedList && (
                <StyledOl>
                  {item.orderedList.map((listItem, index) => (
                    <li key={index}>
                      {listItem.title}
                      <StyledDiv>
                        {listItem.text && <p>{listItem.text}</p>}
                        {listItem.text2 && <p>{listItem.text2}</p>}
                        {listItem.texts && (
                          <StyledInnerUl>
                            {listItem.texts.map((item, index) => (
                              <p key={index}>{item}</p>
                            ))}
                          </StyledInnerUl>
                        )}

                        {listItem.innerList && (
                          <StyledInnerOl>
                            {listItem.innerList.map((item, index) => (
                              <li key={index}>
                                {item.title}
                                <StyledDiv>
                                  <p>{item.text}</p>
                                  {item.list && (
                                    <StyledInsideInnerUl>
                                      {item.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                      ))}
                                    </StyledInsideInnerUl>
                                  )}
                                  {item.text2 && <p>{item.text2}</p>}
                                  {item.texts && (
                                    <StyledInnerUl>
                                      {item.texts.map((item, index) => (
                                        <p key={index}>{item}</p>
                                      ))}
                                    </StyledInnerUl>
                                  )}
                                </StyledDiv>
                              </li>
                            ))}
                          </StyledInnerOl>
                        )}

                        {listItem.list && (
                          <StyledInnerUl>
                            {listItem.list.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </StyledInnerUl>
                        )}
                      </StyledDiv>
                    </li>
                  ))}
                </StyledOl>
              )}
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
  font-weight: 200;
  font-size: 2rem;
`;

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 0.2rem;
`;

const StyledParagraph = styled.p`
  font-style: ${({ $italic }) => ($italic ? "italic" : "none")};
  color: ${({ $italic }) =>
    $italic ? "var(--dark-font)" : "var(--background)"};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--link);
  &:hover {
    color: var(--background);
    transition: 300ms ease-in-out;
  }
`;

const StyledUl = styled.ul`
  list-style: ${({ $liststyle }) => $liststyle};
  padding: 1rem 1rem 0 2rem;
  padding-left: ${({ $padding }) => $padding};
`;

const StyledOl = styled.ol`
  list-style-position: inside;
  padding: 0rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledInnerOl = styled.ol`
  list-style-type: lower-latin;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInnerUl = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInsideInnerUl = styled.ul`
  list-style-type: disc;
  list-style-position: outside;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
