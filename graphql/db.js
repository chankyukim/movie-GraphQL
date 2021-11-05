import axios from 'axios';
const BASE_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (rating, limit) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(LIST_MOVIES_URL, {
    params: {
      minimum_rating: rating,
      limit,
    },
  });

  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie },
    },
  } = await axios.get(MOVIE_DETAIL_URL, {
    params: {
      movie_id: id,
    },
  });

  return movie;
};

export const getSuggestion = async id => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(MOVIE_SUGGESTION_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
