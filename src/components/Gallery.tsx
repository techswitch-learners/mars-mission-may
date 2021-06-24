import { PhotoDetails } from "../api/NasaApi";
import { Dispatch, SetStateAction } from "react";

interface GalleryProps {
    allPhotoData: PhotoDetails[];
    photoSelectedId: number;
    setPhotoSelectedId: Dispatch<SetStateAction<number>>;
}

export function Gallery({ allPhotoData, photoSelectedId, setPhotoSelectedId }: GalleryProps) {
    const imgList = allPhotoData.map(imageData =>
        // <Link to={`/${photoId}`} key={photoId}>
        <img
            key={imageData.id}
            alt={imageData.imgSrc}
            // className={imageData === photoSelectedId ? "small-photo-selected" : "small-photo"}
            // onClick={() => imageData === photoSelectedId ? setPhotoSelectedId(null) : setPhotoSelectedId(imageData)}
            src={imageData.imgSrc}
        />
        // </Link>
    );

    return (
        <div className="small-photo-container" data-testid="small-photo-container">
            {imgList}
        </div>
    );
}

