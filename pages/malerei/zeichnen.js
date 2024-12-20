import Head from "next/head";
import { drawings } from "@/lib/data";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/GallerySection";
import { drawingImages } from "@/lib/gallery";

export default function ZeichnenPage() {
  return (
    <>
      <Head>
        <title>
          ZEICHNEN - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR
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

      <PageContent content={drawings} />
      {drawingImages.map((item, index) => (
        <GallerySection key={index} paintings={item} title={item[0].name} />
      ))}
    </>
  );
}
