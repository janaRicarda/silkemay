import { mbsr } from "@/lib/data";
import Example from "../../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function MBSRPage() {
    return(
        <>
    <PageContent content={mbsr} src={Example} alt={"example"}/>
</>
    );
}

