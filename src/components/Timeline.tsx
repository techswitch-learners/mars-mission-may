import { timelineData, timelineHeaderData } from "./timelineData";
import "../styles/constants.scss";
import "../styles/timeline.scss";
import { Card } from "./Card";

export function Timeline() {

    const map = timelineData.map((post, index) => (
        <div className={(index % 2 === 0) ? "information-card-holder-right" : "information-card-holder-left"}>
            <Card imageSrc={post.imageUrl} 
                    title={`${post.title} - ${post.launchDate}`} 
                    body={`${post.description} `} 
                    href="" showInitialText={true} 
                    textHideable={false} 
                    imageOnRight={(index % 2 === 0) ? true : false}
            />
        </div>
    ));

    return (
        <div id="timeline-page">
            <div id="banner-img">
                <img alt="" src="https://blogs.nasa.gov/redplanetdispatch/wp-content/uploads/sites/279/2018/03/Mars-Website-banner-1024x309.jpg" />
            </div>
            <div id="main-card">
                <Card imageSrc={timelineHeaderData.image} title="Timeline" href="" body={timelineHeaderData.text} showInitialText={true} textHideable={false} imageOnRight={false} />
                
            </div>
            <div className="cards">
                {map}
            </div>
        </div>
    );
}
