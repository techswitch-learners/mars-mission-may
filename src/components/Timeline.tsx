import { timelineData, timelineHeaderData } from "./timelineData";
import "../styles/constants.scss";
import "../styles/timeline.scss";

export function Timeline() {

    const map = timelineData.map((post) => (
        <div>
            <h3>{post.launchDate}</h3>
            <h3>{post.title}</h3>
            <h3>{post.status}</h3>
            <p>{post.description}</p>
            <img alt="" src={post.imageUrl} />
        </div>
    ));

    return (
        <div id="timeline-page">
            <div id="banner-img">
                <img alt="" src="https://blogs.nasa.gov/redplanetdispatch/wp-content/uploads/sites/279/2018/03/Mars-Website-banner-1024x309.jpg" />
            </div>
            <div id="main-card">
                <img alt="" src={timelineHeaderData.image} />
                <p>{timelineHeaderData.text}</p>
            </div>
            <div className="cards">
                {map}
            </div>
        </div>
    );
}