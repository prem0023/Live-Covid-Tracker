import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../index.css";

const Statewise = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const getCovidData = async () => {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise);
      // console.log(actualData.statewise);
      // console.log(data);
    };

    getCovidData();
  }, [data]);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA </span>
            Covid19 Data
          </h1>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th> State </th>
                <th> Confirmed </th>
                <th> Recovered </th>
                <th> Deaths </th>
                <th> Active </th>
                <th> Updated </th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, ind) => {
                return (
                  <tr key={ind}>
                    <td> State </td>
                    <td> {elem.state} </td>
                    <td> {elem.confirmed} </td>
                    <td> {elem.deaths} </td>
                    <td> {elem.active} </td>
                    <td> {elem.lastupdatedtime} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
