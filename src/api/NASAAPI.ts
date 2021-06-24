import { NASA_BASE_URL, NASA_API_KEY } from "../.env";
import camelcaseKeys from "camelcase-keys";

export interface PhotoDetails {
    id: number;
    sol: number;
    camera: Camera;
    imgSrc: string;
    earthDate: string;
    rover: Rover;
}

export interface Camera {
    id: number;
    name: string;
    roverId: number;
    fullName: string;
}

export interface Rover {
    id: number;
    name: string;
    landingDate: string;
    launchDate: string;
    status: string;
}

export async function getRoverImages(rover: string): Promise<PhotoDetails[]> {
    const result = await fetch(`${NASA_BASE_URL}mars-photos/api/v1/rovers/${rover}/photos?sol=1001&api_key=${NASA_API_KEY}`)
        .then(res => res.ok ? res : Promise.reject(res))
        .then(response => response.json());
    return camelcaseKeys(result.photos);
}