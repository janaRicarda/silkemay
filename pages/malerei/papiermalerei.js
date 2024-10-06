import { paperPainting } from "@/lib/data";
import { pulpPage1 } from "@/lib/pulpgallery";
import { pulpPage2 } from "@/lib/pulpgallery";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/Gallery";
import { useState } from "react";
import PulpPagination from "@/Components.js/Pagination";
import { paginate } from "@/utils/paginate";

export default function papiermalereiPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const pulpPaintings = [...pulpPage1, ...pulpPage2];
    function handlePageChange(page) {
        setCurrentPage(page);
    }

    const paginantetItems = paginate(pulpPaintings, currentPage, pageSize);
    console.log(pulpPaintings)
console.log(paginantetItems)
    return(
        <>
        <PageContent content={paperPainting}/>
    {/*     <GallerySection paintings={pulpPage1} /> */}

 {/*    {paginantetItems.map((item, index) => {
        return <GallerySection key={index} paintings={item}/>
    })}  */}

     <PulpPagination 
        //items={paginantetItems.length}
        items={paginantetItems}
        currentPage={currentPage} 
        pageSize={pageSize}
        onPageChange={handlePageChange}/>
      </>
    )
}