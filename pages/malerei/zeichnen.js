import Head from "next/head";
import { drawings } from "@/lib/data";
import { springDrawings } from "@/lib/gallery";
import { summerDrawings } from "@/lib/gallery";
import { autumnDrawings } from "@/lib/gallery";
import { winterDrawings } from "@/lib/gallery";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/Gallery";


export default function ZeichnenPage() {
    return(
        <>
         <Head>
        <title>ZEICHNEN - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE</title>
        <meta name="description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta property="og:description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta property="og:type" content="website" />
      </Head>
        <PageContent content={drawings}/>
        <GallerySection paintings={springDrawings} title="FRÜHJAHR" />
        <GallerySection paintings={summerDrawings} title="SOMMER"/>
        <GallerySection paintings={autumnDrawings} title="HERBST"/>
        <GallerySection paintings={winterDrawings} title="WINTER"/>
        </>
    )
}