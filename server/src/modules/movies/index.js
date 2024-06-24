const axios = require('axios');
const { IMAGE_BASE_PATH, API_KEY, API_BASE_URL } = require('../../config/index');

const { Movies } = require('./enteties/Movies');


const getPopular = async (page) => {
    const result = await axios.get(`${API_BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

    return new Movies(result.data);
}

module.exports = {
    getPopular
}