import Head from "next/head";
import { paperPainting } from "@/lib/data";
import { pulpImages } from "@/lib/pulpgallery";
import PageContent from "@/Components.js/PageContent";
import { useState } from "react";
import PaginationNav from "@/Components.js/PaginationNav";
import { paginate } from "@/utils/paginate";
import GallerySection from "@/Components.js/Gallery";

export default function PapiermalereiPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(pulpImages.length / itemsPerPage);

  //* creates: [1,2,3,...] from numberOfPages
  const pagesArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );

  function handlePageChange(value) {
    if (value === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (value === "previous") {
      setCurrentPage((prev) => prev - 1);
    } else if (typeof value === "number") {
      setCurrentPage(value);
    }
  }

  const slicedItems = paginate(pulpImages, currentPage, itemsPerPage);

  return (
    <>
      <Head>
        <title>
          PAPIERMALEREI - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN
          FÜR PSYCHOTHERAPIE
        </title>
        <meta
          name="description"
          content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin"
        />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta
          property="og:description"
          content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin"
        />
        <meta property="og:type" content="website" />
      </Head>
      <PageContent content={paperPainting} />
      <GallerySection paintings={slicedItems} id={currentPage} />
      <PaginationNav
        pages={pagesArray}
        items={slicedItems}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
