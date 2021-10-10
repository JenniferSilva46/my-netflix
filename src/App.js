import React, { useEffect, useState } from "react";
import "./App.css";

import { ImGithub } from 'react-icons/im'

import tmdb from "./API/index";
import MovieRow from "./components/movieRow/index";
import FeaturedMovie from "./components/featuredMovie/index";
import Header from "./components/header/index"
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [play, setPlay] = useState(null);
  const [blackHeader, setBlackheader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);

      // Pegar featured de forma aleatória
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);

      let playTest = await tmdb.getMoviePlay(chosenInfo.id, "tv");

      if (playTest.results[0] != undefined) {
        let playId = playTest.results[0].key;
        setPlay(playId);

      }
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackheader(true);
      } else {
        setBlackheader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />
      {featuredData && play && <FeaturedMovie item={featuredData} movie={play} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}

      </section>
      <footer>
        <a href="https://github.com/JenniferSilva46" target="_blank">Feito por Jennifer Silva<span role="icon" aria-label="sorriso"> <ImGithub /></span></a>
        <a href="https://www.netflix.com/browse" target="_blank">Direitos de imagem para Netflix</a>
        <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank">
          Dados pegos do site Themoviedb.org

          </a>

      </footer>

      {movieList.length <= 0 &&

        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading" />
        </div>
      }
    </div>
  );
};

export default App;
