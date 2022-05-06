import "./MailList.scss"; 

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mail-title">Save time, explore the world!</h1>
            <span className="mail-description">Sign up to receive the best deals</span>
            <div className="mail-input-container">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList