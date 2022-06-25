import React from "react";
import "./Card.css";

function CardUI(props) {
  return (
    <>
      <div className="card">
        <div className="overflow">
          <img className="pic" src={props.imgsrc} alt="..." />
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.para}</p>
          <a href="/" className="btn btn-outline-success">
            Check Out
          </a>
        </div>
      </div>
    </>
  );
}
export default CardUI;
