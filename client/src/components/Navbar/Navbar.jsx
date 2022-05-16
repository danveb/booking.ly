import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.scss"; 

const Navbar = () => {
    const navigate = useNavigate(); 
    const { user, dispatch } = useContext(AuthContext); 

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
        navigate("/");
    }; 

    return (
        <div className="navbar">
            <div className="nav-container">
                <Link to="/">
                    <span>booking.ly</span>
                </Link>
                {user ? (
                    <div className="nav-items">
                        {user.username}
                        <button 
                            className="nav-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                    ) : ( <div className="nav-items">
                        <Link to="/login">
                            <button className="nav-btn">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="nav-btn">Register</button>
                        </Link>
                </div> )}
            </div>
        </div>
    )
}

export default Navbar