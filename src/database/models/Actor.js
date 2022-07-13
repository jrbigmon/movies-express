
module.exports = (sequelize, DataType) => {
    const Actor = sequelize.define('Actor', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        created_at: DataType.DATE,

        updated_at: DataType.DATE,
        
        first_name: DataType.STRING,

        last_name: DataType.STRING,

        rating: DataType.FLOAT,

        favorite_movie_id: {
            type:DataType.INTEGER,
            foreignkey: true,
            allowNull: true
        }
    },
    {
        tableName: 'actors',
        underscored: true
    })
    
    Actor.associate = (models) => {
        Actor.belongsTo(models.Movie, {
            foreignKey: 'favorite_movie_id',
            as: 'favorite_movie'
        }),

        Actor.belongsToMany(models.Movie,{
            as: 'movies',
            foreignKey:'actor_id',
            otherKey: 'movie_id',
            through: models.ActorMovie
        })
    }
    return Actor;
}