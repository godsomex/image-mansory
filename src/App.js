import React, { useState } from "react";
import "./App.css";

import { initState } from "./data";

function App() {
  const [imgs] = useState(initState);

  return (
    <main>
      {imgs.data.map((img, i) => (
        <>
          <article>
            {img.images && <img loading="lazy" src={img.images[0].link} />}
            <h3>{img.title}</h3>
            <p>{img.images && img.images[0].description}</p>
          </article>
        </>
      ))}
    </main>
  );
}

export default App;
