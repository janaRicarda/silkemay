import { drawings } from "@/lib/data";
import { springDrawings } from "@/lib/gallery";
import { summerDrawings } from "@/lib/gallery";
import { autumnDrawings } from "@/lib/gallery";
import { winterDrawings } from "@/lib/gallery";
import PageContent from "@/Components.js/PageContent";
import GallerySection from "@/Components.js/Gallery";

export default function ZeichnenPage() {
    return(
        <>
        <PageContent content={drawings}/>
        <GallerySection paintings={springDrawings} title="FRÜHJAHR" />
        <GallerySection paintings={summerDrawings} title="SOMMER"/>
        <GallerySection paintings={autumnDrawings} title="HERBST"/>
        <GallerySection paintings={winterDrawings} title="WINTER"/>
        </>
    )
}