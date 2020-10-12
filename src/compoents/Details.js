import React from "react";
import { useHistory } from "react-router-dom";

function Details(props) {
  const history = useHistory();
  const { link, description } = history.location.state.images[0];
  const { title, ups, downs, score } = history.location.state;

  return (
    <div>
      <div>{title}</div>
      <img src={link} />
      <div>{ups}</div>
      <div>{downs}</div>
      <div>{score}</div>
      <div>{description}</div>
    </div>
  );
}

export default Details;
