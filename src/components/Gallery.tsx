import { getRoverImages } from "../api/NASAAPI";
import { useAsync } from "react-async";
import React from "react";

export function Gallery(props) {
    // useEffect(()=>{

    // }, [])
    const { imageList, error, isLoading } = useAsync({ promiseFn: getRoverImages(props.rover) });
    if (isLoading) { return "Loading..."; }
    if (error) { return `Something went wrong: ${error.message}`; }
    if (imageList) {
        console.log(imageList);
        imageList = imageList.photos;
        const imgList = imageList.map(
            (imageObj) =>
                // <Link to={`/${photoId}`} key={photoId}>
                <img
                    key={imageObj.id}
                    alt={imageObj.id}
                    className={imageObj === props.photoSelected ? "small-photo-selected" : "small-photo"}
                    onClick={() => imageObj === props.photoSelected ? props.setPhotoSelected(null) : props.setPhotoSelected(imageObj)}
                    src={imageObj.img_src}
                />
            // </Link>
        );

        return (
            <div className="small-photo-container" data-testid="small-photo-container">
                {imgList}
            </div>
        );
    }
}
