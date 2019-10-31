import React from "react"
import App from "../App"

const ParcelasEmprestimo = (props) => {
    return (
      <div class="dash-view">
        <h2 class="view-heading">Total da Parcela do emprestimo</h2>
        <div class="dash-card">
          <div id="stats-container">
            <div>
            <h5 class="lg-nmbr">R${App.amountTaken}</h5>
            <p>Parcela do emprestimo</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ParcelasEmprestimo
