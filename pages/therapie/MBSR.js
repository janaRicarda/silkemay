import Head from "next/head";
import { mbsr } from "@/lib/data";
import Mbsr from "../../public/images/mbsr.png";
import PageContent from "@/Components.js/PageContent";

export default function MBSRPage() {
    return(
        <>
         <Head>
        <title>MBSR - SILKE MAY - KUNSTTHERAPEUTIN DGKT / HEILPRAKTIKERIN FÜR PSYCHOTHERAPIE</title>
        <meta name="description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta property="og:description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta property="og:type" content="website" />
      </Head>
    <PageContent content={mbsr} src={Mbsr} alt={"Steinkreis"}/>
</>
    );
}

