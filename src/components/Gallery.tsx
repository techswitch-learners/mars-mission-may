import { NASA_BASE_URL, NASA_API_KEY } from '../.env';

export function Gallery(props) {
    useEffect(()=>{
        
    }, [])
    const imageList = getRoverImages();
    const imgList = imageList.map(
        (imageObj) =>
            // <Link to={`/${photoId}`} key={photoId}>
                <img
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


async function getRoverImages (rover: string) {
    const imageList = await fetch(`${NASA_BASE_URL}mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${NASA_API_KEY}`)
        .then(response => response.json())
        .then(result => result.photos);
    return imageList;
}
