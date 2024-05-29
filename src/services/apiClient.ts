import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '45f4caf2be544b67bdacd27d3c96d7f5',
    }
});