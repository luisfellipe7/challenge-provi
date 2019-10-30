import React, { useState, useEffect } from "react";
import '../App.css';


const EmprestimoTotalCardContent = () => {
  const [hasError, setErrors] = useState(false);
  const [emprestimo, setEmprestimo] = useState({});

  async function fetchData() {
    const res = await fetch("http://www.mocky.io/v2/5c923b0932000029056bce39/amountTaken");
    res
      .json()
      .then(res => setEmprestimo(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div class="dash-card">
      <div id="stats-container">
      <h5 class="lg-nmbr">{emprestimo.amountTaken}</h5>
      </div>
    </div>
  );
};
export default EmprestimoTotalCardContent;

