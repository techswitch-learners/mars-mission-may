import "../styles/Timeline.scss";
import { timelineData } from "./timelineData";
import { Card } from "./Card";

export function Timeline() {
    return (
        <div>
            <h1 className="title">Timeline</h1>
            <p>{timelineData[0].title}</p>
            <div className="information-card-holder">
                <Card imageSrc="https://picsum.photos/id/237/200/300" title="First Title" body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" href="" showInitialText={true} textHideable={true} imageOnRight={false} />
                <Card imageSrc="https://picsum.photos/id/237/200/300" title="First Title" body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" href="/spirit" showInitialText={true} textHideable={true} imageOnRight={true} />
                <Card imageSrc="https://picsum.photos/id/237/200/300" title="First Title" body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-" href="/opportunity" showInitialText={true} textHideable={true} imageOnRight={false} />
            </div>
        </div>
    );
}
