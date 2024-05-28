import MockBookData from "../utils/MockData/MockBookData";
import MockUsersData from "../utils/MockData/MockUserData";

let API_URL = '';

export const fetchBookData = async () => {
    API_URL = 'https://freetestapi.com/api/v1/books'
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('API call failed')
        }
        const data = response.json();
        console.log('datatatatatta', data)
        return data;
    } catch (error) {
        console.log('Error in API call:', error);
        return MockBookData;
    }
}

export const fetchUser = async (username, password) => {
    console.log('username', username)
    console.log('password', password)
    API_URL = 'userLoginnnnnnnnnn';
    try {
        const response = await fetch('https://recruitment-api.pyt1.stg.jmr.pl/login', {
            method: 'POST', // Assuming it's a POST request
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: username, password })
        });
        if (!response.ok) {
            throw new Error('User Not Found');
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.log('Error in login user:', error)
        console.log('jijijiijijij', MockUsersData)
        return MockUsersData.find(
            user => user.username === username && user.password === password
        );
    }
}