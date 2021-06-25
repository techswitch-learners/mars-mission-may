import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Card } from "./Card";
import { PhotoDetails, getRoverImages } from "../api/NasaApi";
import { rovers } from "./RoverData";
import "../styles/Home.scss";
import React from "react";

interface RoverParams {
    rover: string;
    photoIdString: string;
}

export function Rover() {
    const [allPhotoData, setAllPhotoData] = useState<PhotoDetails[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoDetails | undefined>(undefined);

    const { rover, photoIdString } = useParams<RoverParams>();
    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i;
    const photoId = parseInt(photoIdString);

    useEffect(() => {
        if (rover.match(regexMatch)) {
            getRoverImages(rover.toLowerCase()).then(images => setAllPhotoData(images));
        }
    }, [rover]);

    useEffect(() => {
        const foundPhoto = allPhotoData.find(
            photoData => photoData.id === photoId
        );
        if (foundPhoto) {
            setSelectedPhoto(foundPhoto);
        }
    }, [photoIdString, allPhotoData]);

    if (!rover.match(regexMatch)) {
        return (
            <Redirect to="/" />
        );
    }

    const roverName = rover.substr(0, 1).toUpperCase() + rover.substr(1).toLowerCase();

    const pageContent = [
        <div key="description-card" className="card-holder">
            <div data-testid={rover.toLowerCase()}>{findRover(rover)}</div>
        </div>
    ];

    if (selectedPhoto) {
        pageContent.push(
            <div key="large-photo-card" className="card-holder" data-testid="large-photo-card">
                <Card
                    imageSrc={selectedPhoto.imgSrc}
                    title={`Camera: ${selectedPhoto.camera.name}`}
                    body={`Date taken: ${selectedPhoto.earthDate}`}
                    href=""
                    showInitialText={true}
                    textHideable={false}
                    imageOnRight={false} />
            </div>);
    }

    pageContent.push(
        <Gallery
            rover={roverName}
            allPhotoData={allPhotoData}
            photoId={photoId} />
    );

    return (
        <div className="home">
            {pageContent}
        </div>
    );
}

function findRover(rover: string) {
    let data;

    if (rover.match(/spirit/i)) {
        data = rovers[0];
    } else if (rover.match(/opportunity/i)) {
        data = rovers[1];
    } else {
        data = rovers[2];
    }

    return <Card imageSrc={data.imageUrl} href="" title={data.rover} body={data.description} showInitialText={true} textHideable={true} imageOnRight={true} />;
}