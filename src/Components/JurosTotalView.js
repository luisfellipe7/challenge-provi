import React from "react"
import App from "../App"

const JurosTotalView = props => {
  return (
    <div class="dash-view">
    <h2 class="view-heading">Total da divida pago</h2>
    <div class="dash-card">
      <div id="stats-container">
        <div>
          <h5 class="lg-nmbr">R${App.totalAmountInTaxes}</h5>
          <p>De juros total</p>
          </div>
          </div>
        </div>
      </div>
  )
}

export default JurosTotalView
