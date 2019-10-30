import React, { useState, useEffect } from "react";
import '../App.css';


const JurosTotalCardContent = () => {
  const [hasError, setErrors] = useState(false);
  const [jurostotal, setjurostotal] = useState({});

  async function fetchData() {
    const res = await fetch("http://www.mocky.io/v2/5c923b0932000029056bce39/totalAmountInTaxes");
    res
      .json()
      .then(res => setjurostotal(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div class="dash-card">
      <div id="stats-container">
	  <h5 class="lg-nmbr">{jurostotal.totalAmountInTaxes}</h5>
	  </div>
    </div>
  );
};

export default JurosTotalCardContent