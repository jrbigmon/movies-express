const { Movie } = require('../database/models');

const moviesController = {
    list: async (req, res) => {
        const movies = await Movie.findAll();
        return res.render('moviesList', { movies });
    },

    detail: async (req, res) => {
        const {id} = req.params;
        const movie = await Movie.findOne({
            where: {id},
            include:{
                association: 'genres'
            }
        });
        return res.render('moviesDetail', { movie });
    },

    recomended: async (req, res) => {
        const movies = await Movie.findAll({
            order : [
                ['rating', 'DESC']
            ]
        });
        return res.render('recommendedMovies', { movies })
    },
    
    new: async (req, res) => {
        const movies = await Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        });
        res.render('newestMovies', { movies })
    }
}

module.exports = moviesController;