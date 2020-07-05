import React, { Component } from "react";
import axios from "axios";

import SearchCountry from "../search-country/search-country.component";
import CountryList from "../country-list/country-list.component";

import "./country-data.styles.scss";

class CountryData extends Component {
  state = {
    countryDatas: [],
    countryObjList: false,
    inputValidation: "",
    searchField: "",
    filteredCountry: {
      name: "",
      countryCode: "",
      newConfirmed: "",
      newDeaths: "",
      newRecovered: "",
      slug: "",
      totalConfirmed: "",
      totalDeaths: "",
      totalRecovered: "",
    },
  };

  fetchData = async () => {
    let res = await axios.get("https://api.covid19api.com/summary");
    this.setState({ countryDatas: { ...res.data.Countries } });
  };

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
      countryObjList: false,
    });

    let countries = this.state.countryDatas;
    let input = this.state.searchField;

    Object.keys(countries).map((key) => {
      if (countries[key].Country.toLowerCase() === input.toLowerCase()) {
        this.setState({
          inputValidation: "",
        });
      }
      return this.state.inputValidation;
    });

    this.setState({ inputValidation: "Please Enter A Valid Country" });
  };

  handleClick = (e) => {
    e.preventDefault();

    let countries = this.state.countryDatas;
    let input = this.state.searchField;

    Object.keys(countries).map((key) => {
      if (countries[key].Country.toLowerCase() === input.toLowerCase()) {
        this.setState({
          filteredCountry: {
            name: countries[key].Country,
            countryCode: countries[key].CountryCode,
            newConfirmed: countries[key].NewConfirmed,
            newDeaths: countries[key].NewDeaths,
            newRecovered: countries[key].NewRecovered,
            slug: countries[key].Slug,
            totalConfirmed: countries[key].TotalConfirmed,
            totalDeaths: countries[key].TotalDeaths,
            totalRecovered: countries[key].TotalRecovered,
          },
          countryObjList: true,
          inputValidation: "",
        });
      }
      return this.state.filteredCountry;
    });
  };

  handleClear = (e) => {
    this.setState({
      countryObjList: false,
      searchField: "",
      filteredCountry: {
        name: "",
        countryCode: "",
        newConfirmed: "",
        newDeaths: "",
        newRecovered: "",
        slug: "",
        totalConfirmed: "",
        totalDeaths: "",
        totalRecovered: "",
      },
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className='country'>
        <h2>Country Data</h2>
        <SearchCountry
          handleChange={this.handleChange}
          placeholder='Input a Country'
          handleClick={this.handleClick}
          searchField={this.state.searchField}
          keyDown={this.handleKeyDown}
          keyUp={this.handleKeyUp}
        />
        <CountryList
          filteredCountry={this.state.filteredCountry}
          countryObjList={this.state.countryObjList}
          handleClear={this.handleClear}
          inputValidation={this.state.inputValidation}
        />
      </div>
    );
  }
}

export default CountryData;
