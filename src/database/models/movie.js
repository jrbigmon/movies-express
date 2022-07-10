
module.exports = (sequelize, DataType) => {
    const Movie = sequelize.define('Movie', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title: DataType.STRING,

        rating: DataType.FLOAT,

        awards: DataType.INTEGER,

        release_date: DataType.DATE,

        length: {
            type:DataType.INTEGER,
            allowNull: true
        },

        genre_id: {
            type:DataType.INTEGER,
            foreignkey: true,
            allowNull: true
        }
    },
    {
        tableName: 'movies',
        timestamps: false
    })
    
    Movie.associate = (models) => {
        Movie.belongsTo(models.Genre, {
            foreignKey: 'genre_id',
            as: 'genres'
        })
    }
    return Movie;
}