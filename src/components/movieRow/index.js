import React, { useState } from "react";
import "./style.css";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    // Pegar o valor do scrollX soma com o valor da metade da tela
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row--left" onClick={handleLeftArrow}>
        <MdNavigateBefore style={{ fontSize: 50 }} />
      </div>
      <div className="movie-row--right" onClick={handleRightArrow}>
        <MdNavigateNext style={{ fontSize: 50 }} />
      </div>
      <div className="movie-row--list-area">
        <div className="movie-row--list" style={{
          marginLeft: scrollX,
          /*A largura do carrossel é o total de itens * a largura de cada item */
          width: items.results.length * 150
        }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movie-row--item">

                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
