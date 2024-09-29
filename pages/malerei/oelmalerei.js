import { oilPainting } from "@/lib/data";
import { oilPaintings } from "@/lib/gallery";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/Gallery";

export default function ÖlmalereiPage() {
    return(
        <>
        <PageContent content={oilPainting}/>
        <GallerySection paintings={oilPaintings}/>
        </>
    )
}