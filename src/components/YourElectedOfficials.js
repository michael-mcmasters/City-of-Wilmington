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
      image: "",
      altTxt: "",
      person: "Lioneld Jordan",
      title: "Mayor",
    },
    {
      image: "",
      altTxt: "",
      person: "Sonia Gutierrez",
      title: "City Council, Ward 1",
    },
    {
      image: "",
      altTxt: "",
      person: "D'Andre Jones",
      title: "City Council",
    },
    {
      image: "",
      altTxt: "",
      person: "Matthew Petty",
      title: "City Council",
    },
    {
      image: "",
      altTxt: "",
      person: "Sloan Scroggin",
      title: "City Council",
    },
    {
      image: "",
      altTxt: "",
      person: "Sarah Bunch",
      title: "City Council",
    },
    {
      image: "",
      altTxt: "",
      person: "Teresa Turk",
      title: "City Council",
    },
    {
      image: "",
      altTxt: "",
      person: "Holly Hertzberg",
      title: "City Council",
    },
    {
      image: "",
      altTxt: "",
      person: "Kara Paxton",
      title: "City Clerk",
    },
    {
      image: "",
      altTxt: "",
      person: "William Storey",
      title: "District Court Judge",
    },
    {
      image: "",
      altTxt: "",
      person: "Kit Williams",
      title: "City Attorney",
    },
  ]
}

export default YourElectedOfficials;