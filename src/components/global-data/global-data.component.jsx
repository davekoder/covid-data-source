import React from "react";

import "./global-data.styles.scss";

const GlobalData = (props) => (
  <div className='global'>
    <h2>Global Data</h2>
    <div className='global-list'>
      <p>{`Total Cases Worldwide: ${props.globalData.TotalConfirmed}`}</p>
      <p>{`New Cases Today: ${props.globalData.NewConfirmed}`}</p>
      <p>{`Total Recoveries Worldwide: ${props.globalData.TotalRecovered}`}</p>
      <p>{`New Recoveries Today: ${props.globalData.NewRecovered}`}</p>
      <p>{`Total Deaths Worldwide: ${props.globalData.TotalDeaths}`}</p>
      <p>{`New Deaths Today: ${props.globalData.NewDeaths}`}</p>
    </div>
  </div>
);

export default GlobalData;
