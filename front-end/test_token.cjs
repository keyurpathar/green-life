const axios = require('axios');

async function testToken() {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZmYwMGY5NzQ2ZmE5NDIwN2QwYTNlMSIsImlhdCI6MTYwMDAwMDAwMCwiZXhwIjoxNjAwMDAwMDAwfQ.invalid_signature';
        await axios.get('http://localhost:8000/user/profile', {
            headers: { token }
        });
    } catch (error) {
        console.log("Status:", error.response?.status);
        console.log("Message:", error.response?.data?.message);
    }
}

testToken();
