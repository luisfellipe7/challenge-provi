import React from "react"
import App from "../App"

const TotalPagoView = (props) => {
    return (
      <div class="dash-view">
        <h2 class="view-heading">Total da divida pago</h2>
        <div class="dash-card">
          <div id="stats-container">
            <div>
              <h5 class="lg-nmbr">R${App.amountPayd}</h5>
              <p>Já foi pago</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default TotalPagoView
