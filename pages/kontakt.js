import Head from "next/head";
import { contact } from "@/lib/data";
import Portrait from "../public/images/portrait.png";
import PageContent from "@/Components.js/PageContent";

export default function KontaktPage() {
    return(
        <>
        <Head>
        <title>KONTAKT | Silke May | Kunsttherapeutin DGKT | Heilpraktikerin für Psychotherapie</title>
        <meta name="description" content="Kontakseite von Silke May - Kunsttherapeutin DGKT, Heilpraktikerin für Psychotherapie, bildende Künstlerin aus Bonn" />
        <meta name="keywords" content="MBSR, MBCT, Kunsttherapie, Bonn"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Silke May" />
        <meta property="og:description" content="Silke May - Kunsttherapeutin DGKT - Heilpraktikerin für Psychotherapie - bildende Künstlerin" />
        <meta property="og:type" content="website" />
      </Head>
        <PageContent content={contact} src={Portrait} alt={"portrait"} liststyle={"none"} padding={"0"}/>
        </>
    );
}
