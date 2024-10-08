import Head from "next/head";
import { paperPainting } from "@/lib/data";
import { pulpPage1, pulpPage2, pulpPage3, pulpPage4, pulpPage5, pulpPage6, pulpPage7 } from "@/lib/pulpgallery";
import PageContent from "@/Components.js/PageContent";
import { useState } from "react";
import PulpPagination from "@/Components.js/Pagination";
import { paginate } from "@/utils/paginate";

export default function PapiermalereiPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const pulpPaintings = [...pulpPage1, ...pulpPage2, ...pulpPage3, ...pulpPage4, ...pulpPage5, ...pulpPage6, ...pulpPage7];
    
    function handlePageChange(page) {
        setCurrentPage(page);
    }

    const paginantetItems = paginate(pulpPaintings, currentPage, pageSize);

    return(
        <>
         <Head>
        <title>PAPIERMALEREI - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE</title>
        <meta name="description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta property="og:description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta property="og:type" content="website" />
      </Head>
        <PageContent content={paperPainting}/>
        <PulpPagination 
        items={paginantetItems}
        currentPage={currentPage} 
        onPageChange={handlePageChange}/>
        </>
    )
}