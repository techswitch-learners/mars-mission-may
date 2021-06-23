import '../styles/Card.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface CardProps {
    imageSrc: string;
    href: string;
    title: string;
    body: string;
    showInitialText: boolean;
    textHideable: boolean;
    imageOnRight: boolean;
    isTimelineCard: boolean;
}

export function Card({ imageSrc, href, title, body, showInitialText, textHideable, imageOnRight, isTimelineCard }: CardProps) {

    const [textVisible, setTextVisible] = useState(showInitialText);

    function changeToggleText(){
        if(textHideable){
            setTextVisible(!textVisible);
        }  
    }

    const cardContent = (
        <div className={`card-link card-image-on-${imageOnRight ? "right" : "left"}`}>
            <img className="card card-image" src={imageSrc} onClick={changeToggleText} />
            { textVisible && 
                <div className="card-text-block">
                    <h1 className="card card-title">{title}</h1>
                    <p className="card card-body">{body}</p>
                </div> }
        </div>
    );

    if (href !== "") {
        return (
            <div className={`card card-object card-is-in-timeline-${isTimelineCard}`} >
                <Link to={href}>
                    {cardContent}
                </Link>
            </div>
        )
    }

    return (
        <div className={`card card-object card-is-in-timeline-${isTimelineCard}`}>
            <div className={`card-link card-image-on-${imageOnRight ? "right" : "left"}`}>
                {cardContent}
            </div>
        </div>
    );
}