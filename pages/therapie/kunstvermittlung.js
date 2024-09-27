import { artMediation } from "@/lib/data";
import Example from "../../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function KunstvermittlungPage() {
    return(
        <>
    <PageContent content={artMediation} src={Example} alt={"example"}/>
</>
    );
}

