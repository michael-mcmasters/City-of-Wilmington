import React, { useState, useEffect } from 'react';
import Avatar from "./Avatar";
import img from "../images/card-images/20160921_161617.jpg";
import "./css/YourElectedOfficials.css";

const YourElectedOfficials = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = getElectedOfficialsData();

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    console.log("re-rendering")
  }, [windowWidth])

  // Using this instead of map so that we can control what rows the cards are displayed in.
  const getAvatar = (i) => {
    return <Avatar
      image={data[i].image}
      altTxt={data[i].altTxt}
      person={data[i].person}
      title={data[i].title.toUpperCase()}
    />
  }

  const getLayoutOne = () => {
    return (
      <>
        <div className="d-flex space-center">
          {getAvatar(0)}
          {getAvatar(1)}
          {getAvatar(2)}
          {getAvatar(3)}
        </div>
        <div className="d-flex space-center">
          {getAvatar(3)}
        </div>
        <div className="d-flex space-center">
          {getAvatar(6)}
          {getAvatar(7)}
          {getAvatar(8)}
          {getAvatar(8)}
        </div>
        <div className="d-flex space-center">
          {getAvatar(6)}
          {getAvatar(7)}
          {getAvatar(8)}
        </div>
      </>
    );
  }

  const getLayoutTwo = () => {
    return (
      <>
        <div className="d-flex space-center">
          {getAvatar(0)}
          {getAvatar(1)}
          {getAvatar(2)}
          {getAvatar(3)}
        </div>
        <div className="d-flex space-center">
          {getAvatar(3)}
        </div>
        <div className="d-flex space-center">
          {getAvatar(6)}
          {getAvatar(7)}
          {getAvatar(8)}
          {getAvatar(8)}
        </div>
        <div className="d-flex space-center">
          {getAvatar(6)}
          {getAvatar(7)}
          {getAvatar(8)}
        </div>
      </>
    );
  }

  return (
    <div className="mt-3 edge-screen-margin text-center elected-officials-container">
      <h2 className="service-center-txt">Your Elected Officials</h2>
      { getLayoutOne()}
    </div>
  );
};

const getElectedOfficialsData = () => {
  return [
    {
      image: img,
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: img,
      altTxt: "",
      person: "Sonia Gutierrez",
      title: "City Council, Ward 1",
    },
    {
      image: img,
      altTxt: "",
      person: "D'Andre Jones",
      title: "City Council",
    },
    {
      image: img,
      altTxt: "",
      person: "Matthew Petty",
      title: "City Council",
    },
    {
      image: img,
      altTxt: "",
      person: "Sloan Scroggin",
      title: "City Council",
    },
    {
      image: img,
      altTxt: "",
      person: "Sarah Bunch",
      title: "City Council",
    },
    {
      image: img,
      altTxt: "",
      person: "Teresa Turk",
      title: "City Council",
    },
    {
      image: img,
      altTxt: "",
      person: "Holly Hertzberg",
      title: "City Council",
    },
    {
      image: img,
      altTxt: "",
      person: "Kara Paxton",
      title: "City Clerk",
    },
    {
      image: img,
      altTxt: "",
      person: "William Storey",
      title: "District Court Judge",
    },
    {
      image: img,
      altTxt: "",
      person: "Kit Williams",
      title: "City Attorney",
    },
  ]
}

export default YourElectedOfficials;