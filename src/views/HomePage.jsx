import React, { useEffect, useState } from "react";
import { useText } from "../context/TextContext";
import Loader from "../components/Loader";

const HomePage = () => {
    const Text = useText();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 5000);
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {
                isLoading ?
                    (
                        <Loader />
                    ) :
                    (

                        <div className="container content-padding">
                            <h1>Welcome to {Text.BOOKIFY} Application</h1>
                        </div>
                    )
            }
        </>
    )
}

export default HomePage;
