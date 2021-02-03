import React, { useState, useEffect } from 'react';
import Avatar from "./Avatar";
import img1 from "../images/avatar-images/050118-Purzycki-Portaits-Crop-SS-35-226x300.jpg";
import img2 from "../images/avatar-images/070218-WIL-Regulator-City-Council-Meeting-SS-20-300x200.jpg";
import img3 from "../images/avatar-images/091720-DaWayne-Sims-crop-SS-05-238x300.jpg";
import img4 from "../images/avatar-images/121420-Council-Bregetta-Fields-Crop-SS-41-2-227x300.jpg";
import img5 from "../images/avatar-images/121420-Council-Linda-Gray-Crop-SS-14-233x300.jpg";
import img6 from "../images/avatar-images/121520-Council-Zanthia-Oliver-crop-SS-18-229x300.jpg";
import img7 from "../images/avatar-images/122220-Council-Harlee-crop-SS-12-242x300.jpg";
import img8 from "../images/avatar-images/122220-Council-President-Elect-crop-SS-277-218x300.jpg";
import img9 from "../images/avatar-images/M_Cabrera_2020-214x300.jpg";
import img10 from "../images/avatar-images/123120-Councilwomen-Welsh-Portraits-Crop-SS-08-1-226x300.jpg";
import img11 from "../images/avatar-images/121520-Council-Yolanda-McCoy-crop-SS-352-235x300 (1).jpg";
import img12 from "../images/avatar-images/122720-Council-Nathan-Field-crop-SS-15-216x300.jpg";
import img13 from "../images/avatar-images/122720-Council-Nathan-Field-crop-SS-15-216x300.jpg";
import "./css/YourElectedOfficials.css";

const YourElectedOfficials = () => {
  const data = getElectedOfficialsData();
  const [, setWindowWidth] = useState(window.innerWidth);   // property is never used, but function is used to force component to re-render.

  // Re-render component every time window width changes.
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, [])

  // Using this instead of map so that we can control what rows the cards are displayed in.
  const getAvatar = (i) => {
    return <Avatar
      image={data[i].image}
      altTxt={data[i].altTxt}
      person={data[i].person}
      title={data[i].title.toUpperCase()}
    />
  }

  let layout;
  if (window.innerWidth > 1030) {
    layout = <>
      <div className="d-flex space-center">
        {getAvatar(0)}
        {getAvatar(1)}
        {getAvatar(2)}
        {getAvatar(3)}
      </div>
      <div className="d-flex space-center">
        {getAvatar(4)}
      </div>
      <div className="d-flex space-center">
        {getAvatar(5)}
        {getAvatar(6)}
        {getAvatar(7)}
        {getAvatar(8)}
      </div>
      <div className="d-flex space-center">
        {getAvatar(9)}
        {getAvatar(10)}
        {getAvatar(11)}
      </div>
    </>
  }
  else if (window.innerWidth > 800) {
    layout = <>
      <div className="d-flex space-even">
        {getAvatar(0)}
        {getAvatar(1)}
        {getAvatar(2)}
      </div>
      <div className="d-flex space-even">
        {getAvatar(3)}
        {getAvatar(4)}
        {getAvatar(5)}
      </div>
      <div className="d-flex space-even">
        {getAvatar(6)}
        {getAvatar(7)}
        {getAvatar(8)}
      </div>
    </>
  }

  else {
    layout = <>
      <div className="d-flex space-even">
        {getAvatar(0)}
        {getAvatar(1)}
      </div>
      <div className="d-flex space-even">
        {getAvatar(2)}
        {getAvatar(3)}
      </div>
      <div className="d-flex space-even">
        {getAvatar(4)}
        {getAvatar(5)}
      </div>
      <div className="d-flex space-even">
        {getAvatar(6)}
        {getAvatar(7)}
      </div>
    </>
  }

  return (
    <div className="mt-3 pt-1 edge-screen-margin text-center elected-officials-container">
      <h2 className="service-center-txt">Your Elected Officials</h2>
      {layout}
    </div>
  );
};

const getElectedOfficialsData = () => {
  return [
    {
      image: img1,
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: img2,
      altTxt: "",
      person: "Sonia Gutierrez",
      title: "City Council",
    },
    {
      image: img3,
      altTxt: "",
      person: "D'Andre Jones",
      title: "City Council",
    },
    {
      image: img4,
      altTxt: "",
      person: "Matthew Petty",
      title: "City Council",
    },
    {
      image: img5,
      altTxt: "",
      person: "Sloan Scroggin",
      title: "District Court Judge",
    },
    {
      image: img6,
      altTxt: "",
      person: "Sarah Bunch",
      title: "City Council",
    },
    {
      image: img7,
      altTxt: "",
      person: "Teresa Turk",
      title: "City Council",
    },
    {
      image: img8,
      altTxt: "",
      person: "Holly Hertzberg",
      title: "City Council",
    },
    {
      image: img9,
      altTxt: "",
      person: "Kara Paxton",
      title: "City Clerk",
    },
    {
      image: img10,
      altTxt: "",
      person: "Chris Beardsley",
      title: "Disctrict Court Judge",
    },
    {
      image: img11,
      altTxt: "",
      person: "Kit Williams",
      title: "City Attorney",
    },
    {
      image: img12,
      altTxt: "",
      person: "Kit Williams",
      title: "City Attorney",
    },
  ]
}

export default YourElectedOfficials;