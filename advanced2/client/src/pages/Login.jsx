import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await loginUser(form);
            alert("Login Successfully");
            console.log(res.data);
            navigate('/dashboard');
        } catch (err) {
            alert(err.response?.data?.message || "Login Failed");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    autoComplete="username"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    autoComplete="current-password"
                />
                <button>Login</button>
            </form>      
        </div>
    );
};
export default Login;