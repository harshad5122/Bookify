import React, { useState } from "react";
import Loader from "./Loader";

const AboutUsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {
                isLoading ?
                    (
                        <Loader />
                    ) :
                    (
                        <div className="container content-padding">
                            <h1>About Us Page</h1>
                        </div>
                    )
            }
        </>
    )
}

export default AboutUsPage;