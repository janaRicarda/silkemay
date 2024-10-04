import { vita } from "@/lib/data";
import Portrait from "../public/images/portrait.png";
import PageContent from "@/Components.js/PageContent";

export default function VitaPage() {
    return(
<PageContent content={vita} src={Portrait} alt={"portrait"}/>
    );
}
