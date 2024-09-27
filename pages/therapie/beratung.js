import { consultation } from "@/lib/data";
import Example from "../../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function BeratungPage() {
    return(
<PageContent content={consultation} src={Example} alt={"example"}/>
    );
}

