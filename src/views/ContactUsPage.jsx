import React, { useState } from "react";
import Loader from "../components/Loader";

const ContactUsPage = () => {
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
                            <h1>Contact Us Page</h1>
                        </div>
                    )
            }
        </>

    )
}

export default ContactUsPage;