import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="card-top">
        <img src={props.img_url} className="circle_img" alt="avatar_img" />
      </div>
      <div className="card-bottom">
        <h3>
          {props.first_name} {props.last_name}
        </h3>
        <h4>{props.user_email}</h4>
      </div>
    </div>
  );
}

export default Card;
