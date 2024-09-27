import { vita } from "@/lib/data";
import Example from "../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function VitaPage() {
    return(
<PageContent content={vita} src={Example} alt={"example"}/>
    );
}
