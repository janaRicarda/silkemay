import { generalInfos } from "@/lib/data";
import Example from "../../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function AllgemeinesPage() {
    return(
<PageContent content={generalInfos} src={Example} alt={"example"}/>
    );
}
