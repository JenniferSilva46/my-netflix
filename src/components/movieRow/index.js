import React from "react";
import "./style.css";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export default ({ title, items }) => {
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row--left">
        <MdNavigateBefore style={{ fontSize: 50 }} />
      </div>
      <div className="movie-row--right">
        <MdNavigateNext style={{ fontSize: 50 }} />
      </div>
      <div className="movie-row--list-area">
        <div className="movie-row--list">
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
