import '../../styles/components-css/footer/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-link">
                    <div className="link-items">
                        <h3>About Us</h3>
                        <Link to='/' className="link">Name</Link>
                        <Link to='/' className="link">gmail</Link>
                        <Link to='/' className="link">071-57488349</Link>
                        <Link to='/' className="link">077-68594984</Link>
                    </div>
                    <div className="link-items">
                        <h3>Quick Links</h3>
                        <Link to='/' className="link">Home</Link>
                        <Link to='/' className="link">Privacy Policy</Link>
                        <Link to='/' className="link">T&C</Link>
                        <Link to='/' className="link">FAQs</Link>
                    </div>
                </div>  {/* footer-link */}
                <div className="footer-link">
                    <div className="link-items">
                        <h3>Follow Us</h3>
                        <Link to='https://www.facebook.com/' target='_blank' className="link">Facebook</Link>
                        <Link to='https://www.instagram.com/' target='_blank'  className="link">Instagram</Link>
                        <Link to='https://twitter.com/?lang=en' target='_blank' className="link">Twitter</Link>
                        <Link to='https://www.youtube.com/' target='_blank' className="link">You Tube</Link>
                    </div>
                    <div className="footer-logo link-items">
                        <img 
                        src="image/logo.png" 
                        alt="image" 
                        className="logo" />
                    </div>
                </div>  {/* footer-link */}
            </div>  {/* footer-container */}
        </div>  /* footer */
    );
}

export default Footer;
