import React from 'react';
import Avatar from "./Avatar";

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
        {getCard(0)}
        {getCard(0)}
      </div>
    </div>
  );
};

const getElectedOfficialsData = () => {
  return [
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
  ]
}

export default YourElectedOfficials;