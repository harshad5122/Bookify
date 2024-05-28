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

export const fetchUser = async (formData) => {
    console.log('formData from service file: ', formData)
    API_URL = 'https://recruitment-api.pyt1.stg.jmr.pl/login';
    try {
        const response = await fetch(API_URL, {
            method: 'POST', // Assuming it's a POST request
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error('User Not Found');
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.log('Error in login user:', error)
        return MockUsersData.find(
            user => user.username === formData?.username && user.password === formData?.password
        );
    }
}

export const createUser = async (formData) => {
    API_URL = 'http://dummyjson.com/users/add';
    const dummyData = {
        username: 'john_doe',
        password: 'P@ssw0rd!',
        email: 'john.doe@example.com',
        confirmPassword: 'P@ssw0rd!',
        phoneNumber: '123-456-7890'
    };
    console.log('asdsdasdas', JSON.stringify(formData))
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) {
            throw new Error('User not created')
        }
        const data = response?.json();
        return data;
    } catch (error) {
        console.log("Error in Create user API: ", error);
        return dummyData;
    }
}