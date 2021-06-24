import { PhotoDetails } from "../api/NASAAPI";

interface GalleryProps {
    allPhotoData: PhotoDetails[];
    photoSelectedId: number;
    setPhotoSelectedId: setValue;
}

export function Gallery({ allPhotoData, photoSelectedId, setPhotoSelectedId }: GalleryProps) {

    const imgList = allPhotoData.map(imageData =>
        // <Link to={`/${photoId}`} key={photoId}>
        <img
            key={imageData.id}
            alt={imageData.img_src}
            // className={imageData === photoSelectedId ? "small-photo-selected" : "small-photo"}
            // onClick={() => imageData === photoSelectedId ? setPhotoSelectedId(null) : setPhotoSelectedId(imageData)}
            src={imageData.img_src}
        />
        // </Link>
    );

    return (
        <div className="small-photo-container" data-testid="small-photo-container">
            {imgList}
        </div>
    );
}

