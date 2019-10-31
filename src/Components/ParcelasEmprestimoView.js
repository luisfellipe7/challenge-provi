import React, {useContext} from "react"
import { ApiConsumer } from "../ApiContext";

const ParcelasEmprestimo = (props) => {
  const apiData = useContext(ApiConsumer);

    return (
      <div class="dash-view">
        <h2 class="view-heading">Total da Parcela do emprestimo</h2>
        <div class="dash-card">
          <div id="stats-container">
            <div>
            <h5 class="lg-nmbr">R${apiData.totalAmountInTaxes}</h5>
            <p>Parcela do emprestimo</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ParcelasEmprestimo
