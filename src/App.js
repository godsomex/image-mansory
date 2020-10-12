import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

function App() {
  const { count } = useInfiniteScroll();
  const clientId = "95b45542db74de2";
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.imgur.com/3/gallery/hot/viral/2.json",
      headers: { authorization: "Client-ID " + clientId },
    })
      .then(function (response) {
        console.log(response);
        setImgs(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main>
      {imgs.slice(0, count).map((img, i) => (
        <article key={i}>
          {img.images && <img loading="lazy" src={img.images[0].link} />}
          <h3>{img.title}</h3>
          <p>{img.images && img.images[0].description}</p>
        </article>
      ))}
    </main>
  );
}

export default App;
