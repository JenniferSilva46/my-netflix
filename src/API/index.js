const API_Key = "db17aa493383dcf63cdfba1085a0f3bb";
const API_BASE = "https://api.themoviedb.org/3";

/*
- Originais da netflix
- recomendados (trending)
- em alta (top rated)
- Ação
- Documentário
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${endpoint}`);
  const json = req.json();
  return json;
};
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do My-Netflix",
        items: await basicFetch(
          `${API_BASE}/discover/tv?with_network=213&language=pt-BR&api_key=${API_Key}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(
          `${API_BASE}/trending/all/week?language=pt-BR&api_key=${API_Key}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta no My-Netflix",
        items: await basicFetch(
          `${API_BASE}/movie/top_rated?language=pt-BR&api_key=${API_Key}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `${API_BASE}/discover/movie?with_genres=27&language=pt-BR&api_key=${API_Key}`
        ),
      },
      {
        slug: "thriller",
        title: "Suspense",
        items: await basicFetch(
          `${API_BASE}/discover/movie?with_genres=53&language=pt-BR&api_key=${API_Key}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `${API_BASE}/discover/movie?with_genres=28&language=pt-BR&api_key=${API_Key}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `${API_BASE}/discover/movie?with_genres=35&language=pt-BR&api_key=${API_Key}`
        ),
      },

      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `${API_BASE}/discover/movie?with_genres=99&language=pt-BR&api_key=${API_Key}`
        ),
      },
    ];
  },
  // Pegar informações de um movie especifico
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "tv":
          info = await basicFetch(
            `${API_BASE}/tv/${movieId}?language=pt-BR&api_key=${API_Key}`
          );

          break;
        case "movie":
          info = await basicFetch(
            `${API_BASE}/movie/${movieId}?language=pt-BR&api_key=${API_Key}`
          );

          break;

        default:
          info = null;
          break;
      }
    }
    return info;
  },
  getMoviePlay: async (movieId, type) => {
    let urlmovie = {};
    if (movieId) {
      switch (type) {
        case "tv":
          urlmovie = await basicFetch(
            `${API_BASE}/tv/${movieId}/videos?api_key=${API_Key}&language=en-US`
          );

          break;
        case "movie":
          urlmovie = await basicFetch(
            `${API_BASE}/movie/${movieId}/videos?api_key=${API_Key}&language=en-US`
          );

          break;

        default:
          urlmovie = null;
          break;
      }
    }
    return urlmovie;
    let play = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${API_Key}&language=en-US`
    );
    let json = await play.json();
    return json;
  },
};
