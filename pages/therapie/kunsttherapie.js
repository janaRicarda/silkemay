import Head from "next/head";
import { artTherapy } from "@/lib/data";
import Kunsttherapie from "../../public/images/kunsttherapie.png";
import PageContent from "@/Components.js/PageContent";
import PageTransition from "@/Components.js/PageTransition";

export default function KunsttherapiePage() {
    return(
        <>
          <Head>
        <title>KUNSTTHERAPIE - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE</title>
        <meta name="description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta property="og:description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta property="og:type" content="website" />
      </Head>
      <PageTransition>
    <PageContent content={artTherapy} src={Kunsttherapie} alt={"Malutensilien"}/>
    </PageTransition>
</>
    );
}

