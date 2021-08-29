import '../../styles/components-css/tour/tourplan.css';

function TourPlan() {
    return (
        <div className="tour-plan">
            <div className="tourplan-container">
                <div className="tourplan-title-container">
                    <h3 className="tourplan-title">Future Tour</h3>
                    <span className="tourplan-subtitle">Remember to book your space! </span>
                </div>  {/* title-container */}
                <div className="info-container-row">
                    <div className="info-container-row2">
                        <div className="info-container-col">
                            <div className="tourplan-img">
                                <img
                                    src="image/img2.jpg"
                                    alt=""
                                    className="tour-img"
                                />
                            </div>
                            <div className="tourplan-info">
                                <h5 className="tour-location">Patna</h5>
                                <span className="tour-date">23 Jul 2021</span><br />
                                <span className="tour-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br />
                                <button>Buy Tickets</button>
                            </div>
                        </div>  {/* info-container-col */}
                        <div className="info-container-col">
                            <div className="tourplan-img">
                                <img
                                    src="image/img3.jpg"
                                    alt=""
                                    className="tour-img"
                                />
                            </div>
                            <div className="tourplan-info">
                                <h5 className="tour-location">Knuckles</h5>
                                <span className="tour-date">07 Aug 2021</span><br />
                                <span className="tour-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br />
                                <button>Buy Tickets</button>
                            </div>
                        </div>  {/* info-container-col */}
                    </div> {/* info-container-row2 */}
                    <div className="info-container-row2">
                        <div className="info-container-col">
                            <div className="tourplan-img">
                                <img
                                    src="image/img2.jpg"
                                    alt=""
                                    className="tour-img"
                                />
                            </div>
                            <div className="tourplan-info">
                                <h5 className="tour-location">Ohiya</h5>
                                <span className="tour-date">23 Jul 2021</span><br />
                                <span className="tour-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br />
                                <button>Buy Tickets</button>
                            </div>
                        </div>  {/* info-container-col */}
                        <div className="info-container-col">
                            <div className="tourplan-img">
                                <img
                                    src="image/img3.jpg"
                                    alt=""
                                    className="tour-img"
                                />
                            </div>
                            <div className="tourplan-info">
                                <h5 className="tour-location">Haputhale</h5>
                                <span className="tour-date">07 Aug 2021</span><br />
                                <span className="tour-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span><br />
                                <button>Buy Tickets</button>
                            </div>
                        </div>  {/* info-container-col */}
                    </div> {/* info-container-row2 */}
                </div>  {/* info-container-row */}
            </div>  {/* tourplan-container */}
        </div>  /* tour-plan */
    );
}

export default TourPlan;
