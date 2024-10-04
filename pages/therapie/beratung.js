import { consultation } from "@/lib/data";
import Beratung from "../../public/images/beratung.png";
import PageContent from "@/Components.js/PageContent";

export default function BeratungPage() {
    return(
<PageContent content={consultation} src={Beratung} alt={"zwei Menschen im Gespräch vor einem Bild"}/>
    );
}

