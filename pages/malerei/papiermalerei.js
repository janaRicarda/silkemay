import { paperPainting } from "@/lib/data";
import { pulpPage1 } from "@/lib/pulpgallery";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/Gallery";

export default function papiermalereiPage() {
    return(
        <>
        <PageContent content={paperPainting}/>
        <GallerySection paintings={pulpPage1} />
        </>
    )
}