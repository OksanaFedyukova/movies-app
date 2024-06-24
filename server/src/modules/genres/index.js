const axios = require('axios');
const { Genre } = require('./entities/Genre');
const { API_BASE_URL, API_KEY } = require('../../../config/index');


const getList = async (language) => {
    const result = await axios.get(`${API_BASE_URL}genre/movie/list?api_key=${API_KEY}&language=${language}`);

    return result.data.genres.map((genre) => new Genre(genre));   
}


module.exports = {
    getList
}