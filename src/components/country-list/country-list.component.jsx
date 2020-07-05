import React from "react";

import "./country-list.styles.scss";

const CountryList = (props) => (
  <div className='country-list'>
    {props.countryObjList && (
      <div className='country-data'>
        <h3>Country: {props.filteredCountry.name}</h3>
        <p>New Confirmed Cases: {props.filteredCountry.newConfirmed}</p>
        <p>New Confirmed Recoveries: {props.filteredCountry.newRecovered}</p>
        <p>New Confirmed Deaths: {props.filteredCountry.newDeaths}</p>
        <p>Total Confirmed Cases: {props.filteredCountry.totalConfirmed}</p>
        <p>
          Total Confirmed Recoveries: {props.filteredCountry.totalRecovered}
        </p>
        <p>Total Confirmed Deaths: {props.filteredCountry.totalDeaths}</p>
        <button className='clear-search' onClick={props.handleClear}>
          Clear
        </button>
        <button className='more-country-details'>More About The Country</button>
      </div>
    )}
    <p>{props.inputValidation}</p>
  </div>
);

export default CountryList;
