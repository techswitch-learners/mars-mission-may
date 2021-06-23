import '../styles/Card.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface CardProps {
    imageSrc: string;
    href: string;
    title: string;
    body: string;
    hideText: boolean;
    imageOnRight:boolean;
    isTimelineCard:boolean;
    cardJustificationRight: boolean;
}

export function Card({ imageSrc, href, title, body, hideText, imageOnRight, isTimelineCard ,cardJustificationRight }: CardProps) {

    const [toggleText, setToggleText] = useState(true);

    const cardContent = (
        <div>
            <img className="card card-image" src={imageSrc} />
            <div className="card-text-block">
                <h1 className="card card-title">{title}</h1>
                <p className="card card-body">{body}</p>
            </div>
        </div>)

    if (href === "") {
        return(
            <div className={`card card-object card-justification-${cardJustificationRight ? "right" : "left"} card-is-in-timeline-${isTimelineCard}`}>
                <Link className={`card-link card-image-on-${imageOnRight ? "right" : "left"}`} to={href}>
                    {cardContent}
                </Link>
            </div>
        )
    }

    return (
        <div className={`card card-object card-justification-${cardJustificationRight ? "right" : "left"} card-is-in-timeline-${isTimelineCard}`}>
            <div className={`card-link card-image-on-${imageOnRight ? "right" : "left"}`}>
                    {cardContent}
            </div>
        </div>
    );
}