const axios = require('axios');

async function testProfile() {
    try {
        // 1. Register a test user
        console.log("Registering test user...");
        const regRes = await axios.post('http://localhost:8000/user/register', {
            name: "Test User",
            email: "test" + Date.now() + "@example.com",
            password: "password123"
        });
        const token = regRes.data.token;
        console.log("Registered. Token:", token);

        // 2. Fetch profile using GET
        console.log("Fetching profile...");
        const profRes = await axios.get('http://localhost:8000/user/profile', {
            headers: { token }
        });
        console.log("Profile fetched successfully:", profRes.data);

    } catch (error) {
        if (error.response) {
            console.log("Error Response status:", error.response.status);
            console.log("Error Response data:", error.response.data);
        } else {
            console.log("Error:", error.message);
        }
    }
}

testProfile();
