import React, { useState, useEffect } from "react";
import "../components/style.css";
const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("udupi");
  useEffect(() => {
    const FetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=295a5d14a692673327ace43d74df2a43`;

      const response = await fetch(url);
      // const resJson = response.json;
      // console.log(response);
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCity(data.main));
    };
    FetchApi();
  }, [search]);
  console.log(city);

  const getInputSearch = (event) => {
    // console.log("getting data", event);
    setSearch(event);
  };
  // console.log("data from API ", city);

  return (
    <>
      <div className="box">
        <div className="inputfield">
          <input
            className="inputdata"
            type="search"
            defaultValue=""
            placeholder="enter place name"
            // value={search}
            onChange={(event) => {
              getInputSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <div className="no-data">
            <h6>no data found</h6>
          </div>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"> &nbsp;</i>
                {search}
              </h2>
              <h1 className="temp"> {city.temp}°cel</h1>
              <h3 className="temp-min-max">
                min: {city.temp_min}°cel| max:
                {city.temp_max}°cel
              </h3>
            </div>
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className=" wave wave-3"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default TempApp;
