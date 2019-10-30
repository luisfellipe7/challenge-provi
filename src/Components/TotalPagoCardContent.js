import React, { useState, useEffect } from "react";
import '../App.css';


const TotalPagoCardContent = () => {
  const [hasError, setErrors] = useState(false);
  const [pago, setpago] = useState({});

  async function fetchData() {
    const res = await fetch("http://www.mocky.io/v2/5c923b0932000029056bce39/amountPayd");
    res
      .json()
      .then(res => setpago(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div class="dash-card">
      <div id="stats-container">
		  <div>
      <h5 class="lg-nmbr">R${pago.amountPayd}</h5>
	  <p>Já foi pago</p>
	  </div>
      </div>
    </div>
  );
};
export default TotalPagoCardContent;

