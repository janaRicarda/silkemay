import { mbsr } from "@/lib/data";
import Mbsr from "../../public/images/mbsr.png";
import PageContent from "@/Components.js/PageContent";

export default function MBSRPage() {
    return(
        <>
    <PageContent content={mbsr} src={Mbsr} alt={"Steinkreis"}/>
</>
    );
}

