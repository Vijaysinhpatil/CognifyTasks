import { useState } from "react";
import { registerUser } from "../api/auth";

import './Register.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await registerUser(form);
            alert("Registered Successfully 🎉🥳");
            console.log(res.data);
            navigate('/login')
        } catch (error) {
            alert(error.response?.data?.message || "Register Failed 🤔");
        }
    }

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    name="fullName"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter full name 😎"
                />
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter email 📧"
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password 🔑"
                />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;