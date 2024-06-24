const { getPopular } = require('../modules/movies/index');

async function movies(parent, args) {

    const data = await getPopular(args.page);

    return data;
}

module.exports = {
    movies,
}