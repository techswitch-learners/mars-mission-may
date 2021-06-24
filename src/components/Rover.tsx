import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Card } from "./Card";
import { PhotoDetails, getRoverImages } from "../api/NasaApi";
import camelcaseKeys from "camelcase-keys";

interface RoverParams {
    rover: string;
}

export function Rover() {
    let { rover } = useParams<RoverParams>();
    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i;

    const [photoSelectedId, setPhotoSelectedId] = useState<number>(0);
    const [allPhotoData, setAllPhotoData] = useState<PhotoDetails[]>([]);

    useEffect(() => {
        if (rover.match(regexMatch)) {
            getRoverImages(rover).then(images => setAllPhotoData(images));
        }
    }, [rover]);

    let photoSelectedData = getFirstSelectedPhoto();
    useEffect(() => {
        // if (photoSelectedId !== 0) {
        photoSelectedData = allPhotoData.find(
            photoData => photoData.id === photoSelectedId
        );
        // }
    }, [photoSelectedId]);

    if (!rover.match(regexMatch)) {
        return (
            <Redirect to="/" />
        );
    }

    rover = rover.substr(0, 1).toUpperCase() + rover.substr(1).toLowerCase();

    const pageContent = [
        <h2 key={rover} className='current-page'>Hello {rover}</h2>,
        <div key={rover}> Rover description card </div>
    ];

    if (photoSelectedData !== undefined) {
        pageContent.push(
            <div>
                <Card
                    imageSrc={photoSelectedData.imgSrc}
                    title="First Title"
                    body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-"
                    href=""
                    showInitialText={true}
                    textHideable={false}
                    imageOnRight={false} />
            </div>
        );
    }

    pageContent.push(
        <Gallery
            allPhotoData={allPhotoData}
            photoSelectedId={photoSelectedId}
            setPhotoSelectedId={setPhotoSelectedId} />
    );

    return (
        <div>
            {pageContent}
        </div>
    );
}

function getFirstSelectedPhoto(): PhotoDetails {
    return camelcaseKeys(
        {
            "id": 409062,
            "sol": 1001,
            "camera": {
                "id": 26,
                "name": "NAVCAM",
                "rover_id": 5,
                "full_name": "Navigation Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01001/opgs/edr/ncam/NRB_486372228EDR_M0481570NCAM00543M_.JPG",
            "earth_date": "2015-05-31",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        }
    );
}