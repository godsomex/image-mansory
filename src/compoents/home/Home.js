/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect, useCallback, memo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled/macro";

function Home({ section, viral, sort, window }) {
  const history = useHistory();
  const [element, setElement] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const page = useRef(0);
  const prevY = useRef(0);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          setTimeout(() => loadMore(), 1000);
        }

        prevY.current = y;
      },
      { threshold: 1 }
    )
  );

  const fetchData = useCallback(async (pageNumber) => {
    const clientId = "95b45542db74de2";
    const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${pageNumber}?showViral=${viral}`;
    const headers = { authorization: "Client-ID " + clientId };
    setLoading(true);

    try {
      const res = await axios({
        method: "get",
        url,
        headers,
      });
      const { status, data } = res;

      setLoading(false);
      return { status, data };
    } catch (e) {
      setLoading(false);
      return e;
    }
  }, []);

  const handleInitial = useCallback(
    async (page) => {
      const newImages = await fetchData(page);
      const { status, data } = newImages;
      if (status === 200) setImages((images) => [...images, ...data.data]);
    },
    [fetchData, viral, window, sort, section]
  );

  const loadMore = () => {
    page.current++;
    handleInitial(page.current);
  };

  useEffect(() => {
    handleInitial(page.current);
  }, [handleInitial]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <Main>
      {images.map((img, i) => (
        <article key={i} onClick={() => history.push(`/details`, img)}>
          {img && img.images && img.images[0].type === "video/mp4" ? (
            <video autoPlay loop className="media" muted>
              <source src={img && img.images && img.images[0].mp4} />
            </video>
          ) : (
            <img
              className="media"
              src={
                (img && img.images && img.images[0].link) || (img && img.link)
              }
              alt="img"
            />
          )}
          <h3>{img.title}</h3>
          <p>{img.images && img.images[0].description}</p>
        </article>
      ))}
      {loading && <Spinner />}
      <div ref={setElement}>
        <Button>loading more ...</Button>
      </div>
    </Main>
  );
}

export default memo(Home);

const Spinner = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: orange;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Main = styled.main`
  columns: 250px;
  column-gap: 20px;

  img,
  video {
    width: 100%;
  }
  article {
    cursor: pointer;
    padding: 20px;
    border: 1px solid #999;
    border-radius: 5px;
    background: #fff;
    break-inside: avoid-column;
    margin-bottom: 1rem;
  }
  a:link,
  a:visited {
    color: black;
  }
  h1 {
    margin-top: 0;
    margin-left: 0.75rem;
  }

  p {
    overflow-wrap: break-word;
    word-wrap: break-word;
    text-align: justify;
  }
`;

const Button = styled.button`
  border-radius: 2px;
  color: orange;
  border: 2px solid orange;
`;
