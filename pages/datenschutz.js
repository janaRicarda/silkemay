import { privatePolicy } from "@/lib/data";
import PageContent from "@/Components.js/PageContent";

export default function DatenschutzPage() {
    return(
<PageContent content={privatePolicy} liststyle={"none"} padding={"0"}/>
    );
}