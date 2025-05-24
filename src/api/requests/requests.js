import axios from "axios";

export const getTrending = async () => {
  const options = {
    method: "GET",
    url: "https://2embed.org/api/trending/all/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTrendingMovies = async () => {
  const options = {
    method: "GET",
    url: "https://2embed.org/api/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTopRatedTvShows = async () => {
  const options = {
    method: "GET",
    url: "https://2embed.org/api/tv/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    url: "https://2embed.org/api/movie/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getMovieInfo = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://2embed.org/api/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getShowInfo = async (showId) => {
  const options = {
    method: "GET",
    url: `https://2embed.org/api/tv/${showId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getSeasonInfo = async (showId, showSeason) => {
  const options = {
    method: "GET",
    url: `https://2embed.org/api/tv/${showId}/season/${showSeason}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getMovieResults = async (toSearch) => {
  const options = {
    method: "GET",
    url: 'https://2embed.org/api/search/movie',
    params: {query: toSearch, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTvResults = async (toSearch) => {
  const options = {
    method: "GET",
    url: 'https://2embed.org/api/search/tv',
    params: {query: toSearch, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: "application/json",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

