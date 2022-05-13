import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/index"; 
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./Register.scss"; 

const Register = () => {
    // useState
    const [credentials, setCredentials] = useState({
        username: undefined, 
        email: undefined, 
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
        dispatch({ type: "REGISTER_START" })
        try {
            const response = await axios.post("/auth/register", credentials); 
            dispatch({ type: "REGISTER_SUCCESS", payload: response.data }); 
            navigate("/"); 
        } catch(err) {
            dispatch({ type: "REGISTER_FAILURE", payload: err.response.data})
        };
    }; 

    return (
        <>
            <Navbar />
            <div className="register">
                <div className="register-container">
                    <h1>Register</h1>
                    <p>Please create your credentials</p>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="username" />
                        <input
                            id="username" 
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            onChange={handleChange}
                        />
                        <label htmlFor="username" />
                        <input
                            id="email" 
                            type="email"
                            name="email"
                            placeholder="Enter your email"
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
                        <button type="submit" disabled={loading}>Create Account</button>
                        <Link to="/login">Already an account? Login</Link>
                        {error && <span>{error.message}</span>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register