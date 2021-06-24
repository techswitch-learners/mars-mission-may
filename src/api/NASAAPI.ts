import { NASA_BASE_URL, NASA_API_KEY } from "../.env";

export interface PhotoDetails {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export async function getRoverImages(rover: string): Promise<PhotoDetails[]> {
    const result = await fetch(`${NASA_BASE_URL}mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${NASA_API_KEY}`)
        .then(res => res.ok ? res : Promise.reject(res))
        .then(response => response.json());
    return result.photos;
}