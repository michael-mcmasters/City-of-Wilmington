import React from 'react';
import Avatar from "./Avatar";
import img from "../images/card-images/20160921_161617.jpg";

const YourElectedOfficials = () => {
  const data = getElectedOfficialsData();

  // Using this instead of map so that we can control what rows the cards are displayed in.
  const getCard = (i) => {
    return <Avatar
      image={data[i].image}
      altTxt={data[i].altTxt}
      person={data[i].person}
      title={data[i].title.toUpperCase()}
    />
  }

  return (
    <div className="mt-3 edge-screen-margin text-center">
      <h2 className="service-center-txt">Your Elected Officials</h2>
      <div className="d-flex space-even">
        {getCard(0)}
        {getCard(1)}
        {getCard(2)}
      </div>
      <div className="d-flex space-even">
        {getCard(3)}
        {getCard(4)}
        {getCard(5)}
      </div>
      <div className="d-flex space-even">
        {getCard(6)}
        {getCard(7)}
        {getCard(8)}
      </div>
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