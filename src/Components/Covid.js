import React, { useEffect, useState } from "react";
import Card from "./Card";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const finalData = await res.json();
    //   console.log(finalData.statewise[0]);
      setData(finalData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <React.Fragment>
      <div className="main_container">
      <div className="header">
        <h1>Live</h1>
        <h2>Coronavirus Outbreak In India</h2>
      </div>
      <div className="container">
        <Card title="Country" content="INDIA" />
        <Card title="Recovered" content={data.recovered} />
        <Card title="Confirmed" content={data.confirmed} />
        <Card title="Deceased" content={data.deaths} />
        <Card title="Active" content={data.active} />
        <Card title="Updated" content={data.lastupdatedtime} />
      </div>
      </div>
    </React.Fragment>
  );
};

export default Covid;
