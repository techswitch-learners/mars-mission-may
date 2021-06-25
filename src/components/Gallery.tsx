import { PhotoDetails } from "../api/NasaApi";
import { Link } from "react-router-dom";
import "../styles/Gallery.scss";

interface GalleryProps {
    rover: string;
    allPhotoData: PhotoDetails[];
    photoId: number;
}

export function Gallery({ rover, allPhotoData, photoId }: GalleryProps) {
    const imgList = allPhotoData.map(imageData =>
        <Link to={`/${rover}/${imageData.id}`} key={imageData.id}>
            <div key={imageData.id} className="small-photo-container" data-testid="small-photo-container">
                <img
                    alt={imageData.imgSrc}
                    className={imageData.id === photoId ? "small-photo-selected" : "small-photo"}
                    src={imageData.imgSrc}
                />
            </div>
        </Link>
    );

    return (
        <div className="thumbnail-gallery" data-testid="thumbnail-gallery">
            {imgList}
        </div>
    );
}

