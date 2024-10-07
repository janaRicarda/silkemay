import { paperPainting } from "@/lib/data";
import { pulpPage1, pulpPage2, pulpPage3, pulpPage4, pulpPage5, pulpPage6, pulpPage7 } from "@/lib/pulpgallery";
import PageContent from "@/Components.js/PageContent";
import { useState } from "react";
import PulpPagination from "@/Components.js/Pagination";
import { paginate } from "@/utils/paginate";

export default function papiermalereiPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const pulpPaintings = [...pulpPage1, ...pulpPage2, ...pulpPage3, ...pulpPage4, ...pulpPage5, ...pulpPage6, ...pulpPage7];
    
    function handlePageChange(page) {
        setCurrentPage(page);
    }

    const paginantetItems = paginate(pulpPaintings, currentPage, pageSize);

    return(
        <>
        <PageContent content={paperPainting}/>
        <PulpPagination 
        items={paginantetItems}
        currentPage={currentPage} 
        onPageChange={handlePageChange}/>
        </>
    )
}