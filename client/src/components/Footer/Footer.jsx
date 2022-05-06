import "./Footer.scss"; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-lists">
                <ul className="footer-list">
                    <li className="footer-list-item">booking.ly</li>
                    <li className="footer-list-item">App</li>
                    <li className="footer-list-item">Features</li>
                    <li className="footer-list-item">Deals</li>
                    <li className="footer-list-item">Privacy Notice</li>
                    <li className="footer-list-item">Terms and Conditions</li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list-item">People</li>
                    <li className="footer-list-item">Mission</li>
                    <li className="footer-list-item">Lifestyle</li>
                    <li className="footer-list-item">Values</li>
                    <li className="footer-list-item">Humans</li>
                    <li className="footer-list-item">Careers</li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list-item">Company</li>
                    <li className="footer-list-item">About</li>
                    <li className="footer-list-item">Investors</li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list-item">FAQs</li>
                    <li className="footer-list-item">Using our App</li>
                </ul>
            </div>
            <div className="footer-text">Copyright © 2022 booking.ly</div>
        </div>
    )
}

export default Footer