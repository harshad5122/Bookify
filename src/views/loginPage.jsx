import React, { useState } from "react";
import Loader from "./Loader";
import LoginForm from "../components/Form/LoginForm";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {
                isLoading ?
                    (
                        <Loader />
                    ) :
                    (
                        <LoginForm />
                    )
            }
        </>
    );
};

export default Login;
