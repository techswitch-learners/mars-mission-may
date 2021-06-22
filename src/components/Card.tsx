import '../styles/Card.scss';
import { Link } from 'react-router-dom';

export interface CardProps {
    imageSrc: string;
    href: string;
    title: string;
    body: string;
    justificationRight: boolean;
}

export function Card({imageSrc, href, title, body, justificationRight}: CardProps) {

    return (
        <Link className={`card card-object justification-${justificationRight ? "right" : "left"}`} to={href}>
            <img className="card card-image" src={imageSrc} />
            <div>
                <h1 className="card card-title">{title}</h1>
                <p className="card card-body">{body}</p>
            </div>
        </Link>
    );
}