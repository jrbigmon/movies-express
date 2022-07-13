const { Movie } = require('../database/models');

const actorController = {
    listFromMovie: async (req, res) => {
        const { id } = req.params
        const movie = await Movie.findByPk(id, {
            include:[{
                association: 'actors',
                include: 'favorite_movie'
            }]
        })
       
        return res.render('./actors/actorFromMovieList', { actors: movie.actors, movie })
    }
}

module.exports = actorController;