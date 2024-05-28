import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { fetchUser } from "../../services/services";
import InputField from "../Input/InputField";
import Button from "../Button/Button";

const LoginForm = () => {
    const [formData, setFormData] = useState(
        {
            username: '',
            password: ''
        }
    )
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        setError('');
        setTimeout(async () => {
            const userData = await fetchUser(formData);
            if (userData) {
                console.log('Logged in successfully');
                login();
                navigate('/')
            } else {
                setError('Invalid username or password');
            }
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    return (
        <div className="container content-padding w-50">
            <h1 className="d-flex justify-content-center">Login</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form onSubmit={e => {
                e.preventDefault();
                handleLogin();
            }}>
                <InputField
                    label='UserName'
                    name='username'
                    value={formData?.username}
                    placeholder='Enter your UserName'
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="password"
                    label='Password'
                    name='password'
                    value={formData?.password}
                    placeholder='Enter your Password'
                    onChange={handleChange}
                    required
                />
                <Button type="submit" className="btn-primary">Login </Button>
            </form>
        </div>
    )
}

export default LoginForm;