import { PhotoDetails } from "../api/NasaApi";
import { Dispatch, SetStateAction } from "react";
import "../styles/Gallery.scss";

interface GalleryProps {
    allPhotoData: PhotoDetails[];
    photoSelectedId: number;
    setPhotoSelectedId: Dispatch<SetStateAction<number>>;
}

export function Gallery({ allPhotoData, photoSelectedId, setPhotoSelectedId }: GalleryProps) {
    const imgList = allPhotoData.map(imageData =>
        // <Link to={`/${photoId}`} key={photoId}>
        <div key={imageData.id} className="small-photo-container" data-testid="small-photo-container">
            <img
                alt={imageData.imgSrc}
                className={imageData.id === photoSelectedId ? "small-photo-selected" : "small-photo"}
                onClick={() => imageData.id === photoSelectedId ? setPhotoSelectedId(0) : setPhotoSelectedId(imageData.id)}
                src={imageData.imgSrc}
            />
        </div>
        // </Link>
    );

    return (
        <div className="thumbnail-gallery" data-testid="thumbnail-gallery">
            {imgList}
        </div>
    );
}

