const axios = require('axios');
const { Genre } = require('./entities/Genre');

require('dotenv').config();

const getList = async (language) => {
    const result = await axios.get(`${process.env.API_BASE_URL}genre/movie/list?api_key=${API_KEY}&language=${language}`);

    return result.data.genres.map((genre) => new Genre(genre));   
}


module.exports = {
    getList
}