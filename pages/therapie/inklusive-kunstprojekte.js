import { inclusiveArtProjects } from "@/lib/data";
import InklusiveProjekte from "../../public/images/inklusiveprojekte.png";
import PageContent from "@/Components.js/PageContent";

export default function InklusiveKunstprojektePage() {
    return(
        <>
        <PageContent content={inclusiveArtProjects} src={InklusiveProjekte} alt={"Menschen auf Wiese mit Bändern"}/>
    </>
    );
}
