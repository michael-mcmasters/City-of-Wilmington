import React from 'react';
import Avatar from "./Avatar";

const YourElectedOfficials = () => {
  const data = [
    {
      image: "",
      altTxt: "",
      person: "Kevin",
      title: "Custodian",
    }
  ]

  const getData = (i) => {
    return <Avatar
      image={data[0].image}
      altTxt={data[0].altTxt}
      person={data[0].person}
      title={data[0].title}
    />
  }

  return (
    <div className="mt-3 edge-screen-margin text-center">
      <h2 className="service-center-txt">Your Elected Officials</h2>
      {getData(0)}
    </div>
  );
};

export default YourElectedOfficials;