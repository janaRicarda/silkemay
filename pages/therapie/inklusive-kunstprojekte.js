import { inclusiveArtProjects } from "@/lib/data";
import Example from "../../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function inklusiveKunstprojektePage() {
    return(
        <>
        <PageContent content={inclusiveArtProjects} src={Example} alt={"example"}/>
    </>
    );
}
