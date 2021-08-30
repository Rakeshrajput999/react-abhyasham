import React, { useEffect, useState } from "react";
import "./Covid.css"
const Covid = () => {
  const [info, setInfo] = useState("");
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const data = await res.json();
      setInfo(data.statewise[0]);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    return () => {
      getCovidData();
    };
  }, []);
  return (
    <div class="maindiv">
      <h1>covid-19 CORONA VIRUS TRACKER</h1>
      <div className="data-div">
        <div className="one border">
          <h3>active cases</h3>
          <h2>{info.active}</h2>
        </div>
        <div className="two border">
          <h3>confirmed cases</h3>
          <h2>{info.confirmed}</h2>
        </div>
        <div className="three border">
          <h3>deaths</h3>
          <h2>{info.deaths}</h2>
        </div>
        <div className="four border">
          <h3>recovered</h3>
          <h2>{info.active}</h2>
        </div>
        <div className ="five border">
          <h3>last update time </h3>
          <h2>{info.lastupdatedtime}</h2>
        </div>
      </div>
    </div>
  );
};

export default Covid;
