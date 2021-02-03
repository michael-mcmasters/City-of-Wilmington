import React from 'react';
import "./css/Avatar.css";

const Avatar = (props) => {
  return (
    <div>
      <div className="main-container">
        <img className="avatar-img" src={props.image} alt={props.altTxt} />
        <div className="name">{props.person}</div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};

export default Avatar;