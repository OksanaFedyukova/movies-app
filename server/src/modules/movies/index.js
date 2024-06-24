const axios = require('axios');
require('dotenv').config();

const { Movies } = require('./enteties/Movies');


const getPopular = async (page) => {
    const result = await axios.get(`${process.env.API_BASE_URL}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`);

    return new Movies(result.data);
}

module.exports = {
    getPopular
}