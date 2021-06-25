import "../styles/Home.scss";
import { Card } from "./Card";
import { TimelineData } from "./TimelineData1";

export function Home() {
    return (
        <div className="home">
            <img className="home-banner-image" src="https://blogs.nasa.gov/redplanetdispatch/wp-content/uploads/sites/279/2018/03/Mars-Website-banner-1024x309.jpg" />
            <div className="card-holder">
                <Card imageSrc={TimelineData[2].imageUrl} title={TimelineData[2].title} body={TimelineData[2].mission as string} href="/curiosity" showInitialText={true} textHideable={false} imageOnRight={false} />
            </div>
            <div className="card-holder">
                <Card imageSrc={TimelineData[3].imageUrl} title={TimelineData[3].title} body={TimelineData[3].mission as string} href="/opportunity" showInitialText={true} textHideable={false} imageOnRight={true} />
            </div>
            <div className="card-holder">
                <Card imageSrc={TimelineData[4].imageUrl} title={TimelineData[4].title} body={TimelineData[4].mission as string} href="/spirit" showInitialText={true} textHideable={false} imageOnRight={false} />
            </div>
            <div className="footer-padding"></div>
        </div>
    );
}