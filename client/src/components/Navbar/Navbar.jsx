import "./Navbar.scss"; 

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
                <span className="logo">booking.ly</span>
                <div className="nav-items">
                    <button className="nav-btn">Login</button>
                    <button className="nav-btn">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar