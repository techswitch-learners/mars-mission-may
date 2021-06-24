import { NASA_BASE_URL, NASA_API_KEY } from "../.env";

export async function getRoverImages(rover: string) {
    const imageList = await fetch(`${NASA_BASE_URL}mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=${NASA_API_KEY}`)
        .then(res => res.ok ? res : Promise.reject(res))
        .then(response => response.json());
    return imageList;
}