import React, { useState } from "react";
import InputField from '../Input/InputField';
import Button from "../Button/Button";
import { createUser } from "../../services/services";
import { useNavigate } from "react-router-dom";

const SignipForm = () => {
    const [formData, setFormData] = useState(
        {
            username: '',
            password: '',
            email: '',
            confirmPassword: '',
            phoneNumber: ''
        }
    )
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSignup = () => {
        setError('');
        setTimeout(async () => {
            const userData = await createUser(formData);
            if (userData) {
                console.log('User created successfully', userData)
                navigate('/login')
            }
        }, 1500)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleLimitExceed = () => {
        alert('Character limit exceeded!');
    };
    return (
        <div className="container content-padding w-50">
            <h1 className="d-flex justify-content-center">SignUp</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSignup();
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
                    type="email"
                    label='Email'
                    name='email'
                    value={formData?.email}
                    placeholder='Enter your Email'
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
                <InputField
                    type="password"
                    label='ConfirmPassword'
                    name='confirmPassword'
                    value={formData?.confirmPassword}
                    placeholder='Enter your Confirm Password'
                    onChange={handleChange}
                    required
                />
                <InputField
                    type="number"
                    label='Phone No.'
                    name='phoneNumber'
                    value={formData?.phoneNumber}
                    placeholder='Enter your Phone Number'
                    onChange={handleChange}
                    maxLength={10}
                    onLimitExceed={handleLimitExceed}
                    required
                />
                <Button type="submit" className="btn-primary d-flex justify-content-center">SignUp</Button>
            </form>
        </div>
    )
}

export default SignipForm;