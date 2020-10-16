import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./Home.css";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

function Home({ section, viral, sort, window }) {
  const { count } = useInfiniteScroll();
  const clientId = "95b45542db74de2";
  const [imgs, setImgs] = useState([]);
  const [page, setPage] = useState(3);
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  useEffect(() => {
    setLoading(true)
    axios({
      method: "get",
      url: `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${viral}`,
      headers: { authorization: "Client-ID " + clientId },
    })
      .then(function (response) {
        console.log(response);
        setImgs(imgs => [...imgs,...response.data.data]);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [ page, section, viral, sort, window]);

  useEffect(() => {
    if (imgs.length === count) {
      setPage((page) => page + 1);
    }
  }, [imgs.length, count]);

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <main>
      {imgs.slice(0, count).map((img, i) => (
        <article key={i} onClick={() => history.push(`/details`, img)}>
          {img.images && img.images[0].type === 'video/mp4' ? <video src={img.images[0].link} /> : img.images && <img loading="lazy" src={img.images[0].link}  alt ={img.title}/>}
          <h3>{img.title}</h3>
          <p>{img.images && img.images[0].description}</p>
        </article>
      ))}
    </main>
  );
}

export default Home;
