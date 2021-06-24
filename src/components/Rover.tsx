import { useParams, Redirect } from "react-router-dom";
import React from "react";
import { Card } from "./Card";
import { rovers } from "./RoverData";

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
        <div>
            <div data-testid={rover}>{findRover(rover)}</div>
            <div>Big Photo</div>
            <div>Gallery</div>
        </div>
    );
}

function findRover(rover: string) {
    let data;
    switch (rover) {
    case "spirit":
        data = rovers[0];
        break;
    case "opportunity":
        data = rovers[2];
        break;
    case "curiosity":
        data = rovers[1];
        break;
    }

    if (data) {
        return <Card imageSrc={data.imageUrl} href="" title={data.rover} body={data.description} showInitialText={true} textHideable={true} imageOnRight={true} />;
    }

    return <h1>waiting</h1>;
}