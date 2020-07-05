import React, { Component } from "react";
import axios from "axios";

import GlobalData from "../global-data/global-data.component";
import CountryData from "../country-data/country-data.component";
import Footer from "../footer/footer.component";

import "./covid-tracker.styles.scss";

class CovidTracker extends Component {
  state = {
    globalData: [],
  };

  fetchData = async () => {
    let res = await axios.get("https://api.covid19api.com/summary");
    this.setState((prevState) => ({
      globalData: { prevState, ...res.data.Global },
    }));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className='content'>
        <div className='header'>
          <h1>Covid19 Data Provider</h1>
          <p>
            Data here is sourced from Novel Coronavirus Visual Dashboard
            operated by the{" "}
            <a href='https://systems.jhu.edu/'>
              Johns Hopkins University Center for Systems Science and
              Engineering (JHU CSSE).
            </a>{" "}
            Also, Supported by ESRI Living Atlas Team and the Johns Hopkins
            University Applied Physics Lab (JHU APL).
          </p>
          <div className='categories'>
            <GlobalData globalData={this.state.globalData} />
            <CountryData />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default CovidTracker;
