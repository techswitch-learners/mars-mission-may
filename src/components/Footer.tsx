import "../styles/Footer.scss";
import React from "react";

function Footer() {
    return (
        <div className="footer" data-testid='footer'>
            <div className="footer-logo-container">
                <a href="https://www.nasa.gov/">
                    <img
                        data-testid='nasa-logo'
                        src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                        alt="NASA" />
                </a>
                <a href="https://www.techswitch.co.uk/">
                    <img
                        data-testid='techswitch-logo'
                        src="https://www.techswitch.co.uk/images/logo.svg"
                        alt="TechSwitch" />
                </a>
            </div>
        </div>
    );
}

export { Footer };