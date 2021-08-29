import '../styles/components-css/maincontent.css';
// import { Button } from './button/Button';
// import { Link } from 'react-router-dom';

function MainContent() {
    return (
        <div className="main-content">
            <div className="title-container">
                <h3 className="content-title">The Horton-Plains</h3>
                <span className="content-subtitle">We Love Travel </span>
            </div>
            <div className="info-container">
                <div className="info-item-img">
                    <img
                        src="image/img04.jpg"
                        alt="image"
                        className="info-img" />
                </div>
                <div className="info-item-text">
                    <span className="sub-detail">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, sapiente molestiae. Blanditiis dolorum illo, temporibus earum libero vel numquam! Ipsa earum dolores possimus perspiciatis dicta debitis quasi quisquam odio sit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic magni iusto sunt numquam nulla debitis animi cum in ratione quae officiis dolor sequi quod totam praesentium, excepturi ea earum.
                    </span>
                </div>
                {/* </li> */}
                {/* </ul> */}
            </div>
        </div>
    );
}

export default MainContent;
