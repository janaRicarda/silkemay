import Head from "next/head";
import { vita } from "@/lib/data";
import Portrait from "../public/images/portrait.png";
import PageContent from "@/Components.js/PageContent";
import PageTransition from "@/Components.js/PageTransition";

export default function VitaPage() {
  return (
    <>
      <Head>
        <title>
          VITA - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR
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

      <PageContent content={vita} src={Portrait} alt={"portrait"} />
    </>
  );
}
