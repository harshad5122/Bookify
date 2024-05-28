import React, { createContext, useContext } from "react";

const TextContext = createContext();

export const TextProvider = ({ children }) => {
    const text = {
        BOOKIFY: "Bookify",
        HOME: "Home",
        BOOK_STORE: "Book Store",
        ABOUT_US: "About Us",
        LOGIN: "Login",
        LOGOUT: 'Logout',
        SIGNUP: 'Sign Up',
        CONTACT_US: "Contact Us",
        SEARCH_PLACEHOLDER: "Search",
        SEARCH: "Search"
    };
    return (
        <TextContext.Provider value={text}>
            {children}
        </TextContext.Provider>
    )
}

export const useText = () => {
    return useContext(TextContext);
};