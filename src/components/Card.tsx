import "../styles/Card.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

interface CardProps {
    imageSrc: string;
    href: string;
    title: string;
    body: string;
    showInitialText: boolean;
    textHideable: boolean;
    imageOnRight: boolean;
}

export function Card({ imageSrc, href, title, body, showInitialText, textHideable, imageOnRight }: CardProps) {

    const [textVisible, setTextVisible] = useState(showInitialText);

    function toggleTextVisible(){
        if(textHideable){
            setTextVisible(!textVisible);
        }
    }

    const cardContent = [<img key={imageSrc} className="card-image" src={imageSrc} onClick={toggleTextVisible} />];

    if (textVisible) {
        cardContent.push(
            <div className="card-text-block">
                <h1 className="card-title">{title}</h1>
                <p className="card-body">{body}</p>
            </div>);
    }

    if (href !== "") {
        return (
            <Link className={`card ${imageOnRight ? "card-image-right" : ""}`} to={href}>
                {cardContent}
            </Link>
        );
    }

    return (
        <div className={`card ${imageOnRight ? "card-image-right" : ""}`}>
            {cardContent}
        </div>
    );
}