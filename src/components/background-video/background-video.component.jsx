import React from "react";

import CovidTracker from "../covid-tracker/covid-tracker.component";
import bgVideo from "../../assets/background-video.mp4";

import "./background-video.styles.scss";

const VideoBackground = () => {
  return (
    <div className='container'>
      <video autoPlay='autoplay' loop='loop' muted className='video'>
        <source src={bgVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <CovidTracker />
    </div>
  );
};

export default VideoBackground;
