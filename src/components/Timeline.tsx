import { TimelineData, TimelineHeaderData } from "./TimelineData";
import "../styles/constants.scss";
import "../styles/Timeline.scss";
import { Card } from "./Card";

export function Timeline() {
    const map = TimelineData.map((post, index) => 
        <div key={index} className={index % 2 === 0 ? "information-card-holder-right" : "information-card-holder-left"}>
            <Card imageSrc={post.imageUrl}
                title={`${post.title} - ${post.launchDate}`}
                body={`${post.description} `}
                href="" showInitialText={true}
                textHideable={false}
                imageOnRight={index % 2 === 0 ? true : false}
            />
        </div>
    );

    return (
        <div className="timeline-page">
            <div className="timeline-banner">
                <img className="timeline-banner-img" alt="" src="https://blogs.nasa.gov/redplanetdispatch/wp-content/uploads/sites/279/2018/03/Mars-Website-banner-1024x309.jpg" />
            </div>
            <div className="main-card">
                <Card imageSrc={TimelineHeaderData.image} title="Timeline" href="" body={TimelineHeaderData.text} showInitialText={true} textHideable={false} imageOnRight={false} />
            </div>
            <div className="timeline-cards">
                {map}
            </div>
            <div className='footer-padding'></div>
        </div>
    );
}
