import { Link } from 'react-router-dom';
import '../../styles/components-css/contactus/homecontact.css';
import { Button } from '../button/Button';

function HomeContact() {
    return (
        <div className="home-contact">
            <div className="home-contact-title">
                <span>We Love Travel</span>
            </div>
            <div className="home-contact-container">
                <div className="our-team-container">
                    <div className="our-team-title">
                        <span>Our Team Members</span>
                    </div>
                    <div className="our-team-row">
                        <div className="our-team-col">
                            <div className="our-team-img">
                                <img
                                    src="image/Team/ruwan_ok.jpg"
                                    alt="img"
                                    className="team-img" />
                            </div>
                            <div className="our-team-info">
                                <h6>Ruwan</h6>
                                <span>Male Team Guider</span>
                            </div>
                        </div>  {/* our-team-col */}
                        <div className="our-team-col">
                            <div className="our-team-img">
                                <img
                                    src="image/Team/hansi_ok.jpg"
                                    alt="img"
                                    className="team-img" />
                            </div>
                            <div className="our-team-info">
                                <h6>Hansi</h6>
                                <span>Female Team Guider</span>
                            </div>
                        </div>  {/* our-team-col */}
                    </div>  {/* our-team-row */}
                    <div className="our-team-row">
                        <div className="our-team-col">
                            <div className="our-team-img">
                                <img
                                    src="image/Team/tharuka_ok.jpg"
                                    alt="img"
                                    className="team-img" />
                            </div>
                            <div className="our-team-info">
                                <h6>Tharuka</h6>
                                <span>Photographer</span>
                            </div>
                        </div>  {/* our-team-col */}
                        <div className="our-team-col">
                            <div className="our-team-img">
                                <img
                                    src="image/Team/oshadi_ok.jpg"
                                    alt="img"
                                    className="team-img" />
                            </div>
                            <div className="our-team-info">
                                <h6>Ohsadi</h6>
                                <span>Cordinator</span>
                            </div>
                        </div>  {/* our-team-col */}
                    </div>  {/* our-team-row */}
                </div>  {/* our-team-container */}
                <div className="contactus-container">
                    <div className="contactus-title">
                        <span>Contact US</span>
                    </div>
                    <div className="input-area">
                        <ul className='input-body'>
                            <li className="input-inside">
                                <form>
                                    {/* <ul className='input-top'> */}
                                    <input
                                        className='footer-input'
                                        name='Name'
                                        type='text'
                                        placeholder='Your Name'
                                    />
                                    <input
                                        className='footer-input'
                                        name='number'
                                        type='number'
                                        placeholder='Contact Number'
                                    />
                                    {/* </ul> */}
                                    <input
                                        className='footer-input'
                                        name='email'
                                        type='email'
                                        placeholder='Your Email'
                                    />
                                    <input
                                        className='footer-input'
                                        name='massage'
                                        type='text'
                                        placeholder='Your Massage'
                                    />
                                </form>
                            </li>
                        </ul>
                    </div>  {/* class input-area  */}
                    <div className="submit_btn">
                        <Link to='/'>
                            <Button
                                className='btns'
                                buttonStyle='btn-black-curve'
                                buttonSize='btn-medium'
                            >
                                Submit
                            </Button>
                        </Link>
                    </div>
                </div>  {/* home-contactus-container */}
            </div>  {/* home-contact-container */}
        </div>  /* home-contact */
    );
}

export default HomeContact;
