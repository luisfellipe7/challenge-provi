import React, {Component} from "react"
import "../App.css"
import EmprestimoContext from "../App"

class Overview extends Component {
  static contextType = EmprestimoContext
  render() {
    console.log(this.context)
  return (
    <div class="dash-view">
      <h2 class="view-heading">Aqui está um resumo do seu empréstimo</h2>
      <div>
        <h4 class="card-heading">Seu resumo mensal</h4>
        <div class="dash-card">
          <div id="stats-container">
          <div>
            <h5 class="lg-nmbr">R${this.totalAmountInTaxes}</h5>
            <p>Juros esse mês</p>
          </div>
          <div>
            <h5 class="lg-nmbr">R${this.amountPayd}</h5>
            <p>Total pago esse mês</p>
          </div>
          <div>
            <h5 class="lg-nmbr">R${this.amountTaken}</h5>
            <p>Total da dívida</p>
          </div>
          <div>
            <h5 class="lg-nmbr">{this.monthlyInterest}%</h5>
            <p>% mensal de juros</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
  }
}

export default Overview
