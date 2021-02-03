import React from 'react';
import "./css/Avatar.css";

const Avatar = (props) => {
  return (
    <div>
      <div className="main-container">
        <img className="avatar-img" src={props.image} alt={props.altTxt} />
        <div>{props.person}</div>
        <div>{props.title}</div>
      </div>
    </div>
  );
};

export default Avatar;