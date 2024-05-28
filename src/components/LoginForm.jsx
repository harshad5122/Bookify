import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchUser } from "../services/services";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        setError('');
        setTimeout(async () => {
            const userData = await fetchUser(username, password);
            if (userData) {
                console.log('Logged in successfully');
                login();
                navigate('/')
            } else {
                setError('Invalid username or password');
            }
        }, 1000);
    };
    return (
        <div className="container content-padding w-50">
            <h1 className="d-flex justify-content-center">Login Page</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form onSubmit={e => {
                e.preventDefault();
                handleLogin();
            }}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username" value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;