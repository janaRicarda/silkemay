import PageContent from "@/Components.js/PageContent";
import { news } from "@/lib/data";

export default function AktuellesPage() {
    return(
        <>
            <PageContent content={news}/>
        </>
    )
}