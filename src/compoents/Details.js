import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

function Details() {
  const history = useHistory();
  const { link, description } = history.location.state.images[0];
  const { title, ups, downs, score } = history.location.state;

  return (
    <Wrapper>
      <Container className="container">
        <div className="imgBx">
          <img src={link} alt={title} />
        </div>
        <div className="details">
          <div className="content">
            <h2>
              {title} <br />
            </h2>
            <p>{description}</p>
            <p>
              <span>{ups} ups </span>
              <span>{downs} downs</span>
            </p>
            <Button>{score} score</Button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Details;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: #000;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  padding: 15px 20px;
  margin-top: 5px;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 40px;
`;

const Container = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 900px;
  height: 600px;
  background: #fff;
  margin: 20px;

  .imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #212121;
    transition: 0.3s linear;
  }

  .imgBx:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 24px;
    color: #000;
    opacity: 0.2;
    font-size: 8em;
    font-weight: 800;
  }

  .imgBx img {
    height: 100%;
    position: relative;
    width: 100%;
    left: -50px;
    transition: 0.9s linear;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px;
  }

  .details h2 {
    margin: 0;
    padding: 0;
    font-size: 2.4em;
    line-height: 1em;
    color: #444;
  }

  .details h2 span {
    font-size: 0.4em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #999;
  }

  .details p {
    overflow: scroll;
    max-width: 85%;
    height: 150px;
    margin-left: 15%;
    color: #333;
    font-size: 15px;
    margin-bottom: 36px;
  }

  .img-colors span {
    width: 26px;
    height: 26px;
    top: 7px;
    margin-right: 12px;
    left: 10px;
    border-radius: 50%;

    display: inline-flex;
  }

  .black {
    background: #000;
  }

  .red {
    background: #d5212e;
  }

  .orange {
    background: #f18557;
  }

  .img-colors .active:after {
    content: "";
    width: 36px;
    height: 36px;
    border: 2px solid #000;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    left: -5px;
    top: -5px;
  }

  /* responsive */
  @media (max-width: 1080px) {
    height: auto;

    .imgBx {
      padding: 40px;
      box-sizing: border-box;
      width: 100% !important;
      height: auto;
      text-align: center;
      overflow: hidden;
    }
    .imgBx img {
      left: initial;
      max-width: 100%;
      transform: rotate(0deg);
    }
    .details {
      width: 100% !important;
      height: auto;
      padding: 20px;
    }
    .details p {
      margin-left: 0;
      max-width: 100%;
    }
  }
`;
