import axios from 'axios';

// Set the base URL for your Rails API
axios.defaults.baseURL = 'http://localhost:3001'; //  API URL

// Set the default headers for POST requests
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Export axios to be used throughout the app
export default axios;