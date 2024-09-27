import { artTherapy } from "@/lib/data";
import Example from "../../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function KunsttherapiePage() {
    return(
        <>
    <PageContent content={artTherapy} src={Example} alt={"example"}/>
</>
    );
}

