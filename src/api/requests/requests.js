import axios from "axios";

export const getTrending = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTrendingMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTopRatedTvShows = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getMovieInfo = async (movieId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getShowInfo = async (showId) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${showId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getSeasonInfo = async (showId, showSeason) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/tv/${showId}/season/${showSeason}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getMovieResults = async (toSearch) => {
  const options = {
    method: "GET",
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {query: toSearch, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getTvResults = async (toSearch) => {
  const options = {
    method: "GET",
    url: 'https://api.themoviedb.org/3/search/tv',
    params: {query: toSearch, include_adult: 'false', language: 'en-US', page: '1'},
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjQyMGFlYTE1YjYyZDFhZjllYTc0OWQ5NWZhYmFkMyIsInN1YiI6IjY1NzE3ZTU0OTBmY2EzMDE0ZTcxYjFlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DY3qGumteCUGUB_jcJNzt0obDH0jaPHkN5AtcIjHLfw",
    },
  };

  const res = await axios.request(options);

  return res.data;
};

export const getEmbedUrl = (type, id, season = null, episode = null) => {
  if (type === "movie") {
    return `https://cloudstream.pro/embed/movie?tmdb=${id}`;
  } else if (type === "tv" && season && episode) {
    return `https://cloudstream.pro/embed/tv?tmdb=${id}&s=${season}&e=${episode}`;
  }

  // Fallback to 2embed if Cloudstream Pro is unavailable
  if (type === "movie") {
    return `https://2embed.org/embed/movie?tmdb=${id}`;
  } else if (type === "tv" && season && episode) {
    return `https://2embed.org/embed/tv?tmdb=${id}&s=${season}&e=${episode}`;
  }

  return null; // Return null if parameters are invalid
};

