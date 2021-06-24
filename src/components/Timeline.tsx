import { timelineData } from "./timelineData";

export function Timeline() {
    return (
        <div>
            <h1 className="title">Timeline</h1>
            <p>{timelineData[0].title}</p>
        </div>
    );
}