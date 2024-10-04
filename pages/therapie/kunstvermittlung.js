import { artMediation } from "@/lib/data";
import Kunstvermittlung from "../../public/images/kunstvermittlung.png";
import PageContent from "@/Components.js/PageContent";

export default function KunstvermittlungPage() {
    return(
        <>
    <PageContent content={artMediation} src={Kunstvermittlung} alt={"Menschen sitzen auf Stühlen in einem Halbkreis"}/>
</>
    );
}

