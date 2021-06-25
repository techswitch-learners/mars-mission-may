import { useParams, Redirect } from "react-router-dom";
import { Card } from "./Card";
import { rovers } from "./RoverData";
import "../styles/Home.scss";
import React from "react";

interface RoverParams {
    rover: string;
}

export function Rover() {
    const { rover } = useParams<RoverParams>();
    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i;

    if (!rover.match(regexMatch)) {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div className="home">
            <div className="card-holder">
                <div data-testid={rover.toLowerCase()}>{findRover(rover)}</div>
            </div>
            <div>Big Photo</div>
            <div>Gallery</div>
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