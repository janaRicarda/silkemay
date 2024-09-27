import { contact } from "@/lib/data";
import Example from "../public/images/example.png";
import PageContent from "@/Components.js/PageContent";

export default function KontaktPage() {
    return(
<PageContent content={contact} src={Example} alt={"example"} liststyle={"none"} padding={"0"}/>
    );
}
