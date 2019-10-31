import React, {useContext} from "react"
import { ApiConsumer } from "../ApiContext";

const EmprestimoTotal =(props) => {
  const apiData = useContext(ApiConsumer);
    return (
      <div class="dash-view">
        <h2 class="view-heading">Total da divida pago</h2>
        <div class="dash-card">
          <div id="stats-container">
            <div>
            <h5 class="lg-nmbr">R${apiData.amountTaken}</h5>
            <p>Emprestimo total</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EmprestimoTotal
