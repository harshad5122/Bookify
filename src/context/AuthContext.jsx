import { createContext, useContext, useState, useEffect, Children } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);
    const login = () => {
        sessionStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };

    const logout = () => {
        sessionStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/login');
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}