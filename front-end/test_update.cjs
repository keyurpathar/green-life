const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function testProfileUpdate() {
    try {
        // Register a test user
        console.log("Registering test user...");
        const regRes = await axios.post('http://localhost:8000/user/register', {
            name: "Test Update User",
            email: "testupdate" + Date.now() + "@example.com",
            password: "password123"
        });
        const token = regRes.data.token;
        console.log("Token:", token);

        // Update profile
        console.log("Updating profile...");
        const form = new FormData();
        form.append('name', 'Updated Name');
        form.append('phone', '1234567890');
        form.append('address', JSON.stringify({ line1: 'line1', line2: 'line2' }));
        form.append('gender', 'Male');
        form.append('dob', '1990-01-01');

        const config = {
            headers: {
                ...form.getHeaders(),
                token: token
            }
        };

        const updateRes = await axios.post('http://localhost:8000/user/profile/update', form, config);
        console.log("Profile updated successfully:", updateRes.data);

    } catch (error) {
        if (error.response) {
            console.log("Error Response status:", error.response.status);
            console.log("Error Response data:", error.response.data);
        } else {
            console.log("Error:", error.message);
        }
    }
}

testProfileUpdate();
