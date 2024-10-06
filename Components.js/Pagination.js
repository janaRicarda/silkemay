import styled from "styled-components";
import GallerySection from "./Gallery";
import Link from "next/link";

export default function PulpPagination({items, pageSize, currentPage, onPageChange}) {
    const pagesCount = (items / pageSize);
console.log("currentPage:", currentPage)
console.log("items:", items)
console.log(pagesCount);
    //if (pagesCount === 1) return null;
    if (pagesCount === 0) return null;
    //const pages = Array.from([pagesCount], (i) => i + 1);
    const pages = [1, 2];
    console.log(pages)
    return(
        <StyledArticle>
            <GallerySection paintings={items}/>
            <StyledList>
                {pages.map((page) => (
                    <StyledListItem  $itemActive={page === currentPage} key={page}>
                        <a onClick={()=>onPageChange(page)}>{page}</a>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledArticle>
    )
}

const StyledArticle = styled.article``;

const StyledList = styled.ul`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 0.2rem;
 list-style: none;
 padding: 0;
 margin-bottom: 2rem;
`;

const StyledListItem = styled.li`
background: ${({$itemActive}) => ($itemActive ? "black" : "var(--dark-font)")};
display: flex;
 justify-content: center;
 align-items: center;
 width: ${({$itemActive}) => ($itemActive ? "1.2rem" : "0.8rem")};
 height: ${({$itemActive}) => ($itemActive ? "1.2rem" : "0.8rem")};
 border-radius: 50%;
 cursor: pointer;
 color: transparent;
`;