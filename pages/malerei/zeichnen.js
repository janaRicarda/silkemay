import { drawings } from "@/lib/data";
import { drawingImages } from "@/lib/gallery";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/Gallery";

export default function ZeichnenPage() {
    return(
        <>
        <PageContent content={drawings}/>
        <GallerySection paintings={drawingImages} title="HERBST"/>
        </>
    )
}