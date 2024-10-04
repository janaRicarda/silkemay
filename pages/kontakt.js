import { contact } from "@/lib/data";
import Portrait from "../public/images/portrait.png";
import PageContent from "@/Components.js/PageContent";

export default function KontaktPage() {
    return(
<PageContent content={contact} src={Portrait} alt={"portrait"} liststyle={"none"} padding={"0"}/>
    );
}
