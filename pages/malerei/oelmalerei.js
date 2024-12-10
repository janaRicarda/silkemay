import Head from "next/head";
import { oilPainting } from "@/lib/data";
import { oilPaintings } from "@/lib/gallery";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/GallerySection";

export default function ÖlmalereiPage() {
  return (
    <>
      <Head>
        <title>
          ÖLMALEREI - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR
          PSYCHOTHERAPIE
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

      <PageContent content={oilPainting} />
      <GallerySection paintings={oilPaintings} />
    </>
  );
}
