import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/index"; 
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./Login.scss"; 

const Login = () => {
    // useState
    const [credentials, setCredentials] = useState({
        username: undefined, 
        password: undefined, 
    }); 

    // useContext
    const { loading, error, dispatch } = useContext(AuthContext); 

    // useNavigate
    const navigate = useNavigate(); 

    // handleChange
    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev, 
            [e.target.id]: e.target.value
        })); 
    }; 

    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        dispatch({ type: "LOGIN_START" })
        try {
            const response = await axios.post("/auth/login", credentials); 
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data }); 
            navigate("/"); 
        } catch(err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data})
        };
    }; 

    return (
        <>
            <Navbar />
            <div className="login">
                <div className="login-container">
                    <h1>Sign In</h1>
                    <p>Please enter your credentials</p>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="username" />
                        <input
                            id="username" 
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            onChange={handleChange}
                        />
                        <label htmlFor="password" />
                        <input 
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                        <button type="submit" disabled={loading}>Sign In</button>
                        <Link to="/register">Register New Account</Link>
                        {error && <span>{error.message}</span>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login