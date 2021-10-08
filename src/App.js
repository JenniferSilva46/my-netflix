import React, { useEffect } from "react";

import tmdb from "./API/index";

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      console.log(list);
    };
    loadAll();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};
