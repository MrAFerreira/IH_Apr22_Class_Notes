const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: {
      type: String,
      default:
        'https://res.cloudinary.com/mraferreira/image/upload/v1652347918/movie-project/mvc_67565_urfvwr.jpg',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Movie', movieSchema);
