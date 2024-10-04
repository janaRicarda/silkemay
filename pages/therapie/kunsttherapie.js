import { artTherapy } from "@/lib/data";
import Kunsttherapie from "../../public/images/kunsttherapie.png";
import PageContent from "@/Components.js/PageContent";

export default function KunsttherapiePage() {
    return(
        <>
    <PageContent content={artTherapy} src={Kunsttherapie} alt={"Malutensilien"}/>
</>
    );
}

