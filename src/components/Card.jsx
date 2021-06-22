export function Card(props) {

    return (
        <div className="Card" className="Card-Object" className={`Justification-${props.jusification}`} href={props.href}>
            <img className="Card" ClassName="Card-Image" src={props.src}></img>
            <div>
                <h1 className="Card" ClassName="Card-Title">{props.title}</h1>
                <p className="Card" ClassName="Card-Body">{props.body}</p>
            </div>
        </div>
    );
}