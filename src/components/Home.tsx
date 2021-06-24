import "../styles/Home.scss";
import { Card } from "./Card";
import { timelineData } from "./timelineData";

export function Home() {
    return (
        <div className="home">
            <img className="banner-image" src="https://blogs.nasa.gov/redplanetdispatch/wp-content/uploads/sites/279/2018/03/Mars-Website-banner-1024x309.jpg" />
            <div className="card-holder">
                <Card imageSrc={timelineData[2].imageUrl} title={timelineData[2].title} body={timelineData[2].mission as string} href="/curiosity" showInitialText={true} textHideable={false} imageOnRight={false} />
            </div>
            <div className="card-holder">
                <Card imageSrc={timelineData[3].imageUrl} title={timelineData[3].title} body={timelineData[3].mission as string} href="/opportunity" showInitialText={true} textHideable={false} imageOnRight={true} />
            </div>
            <div className="card-holder">
                <Card imageSrc={timelineData[4].imageUrl} title={timelineData[4].title} body={timelineData[4].mission as string} href="/spirit" showInitialText={true} textHideable={false} imageOnRight={false} />
            </div>
            <div className="footer-padding"></div>
        </div>
    );
}