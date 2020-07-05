import React from "react";

import "./footer.styles.scss";

const Footer = () => (
  <div className='footer'>
    <h3>
      All Data pulled from API -{" "}
      <a href='https://covid19api.com/'>COVID19API</a>
    </h3>
    <h5>Site Created & Maintained By: Michael David Galibut</h5>
  </div>
);
export default Footer;
