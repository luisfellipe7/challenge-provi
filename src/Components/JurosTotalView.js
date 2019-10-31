import React, {useContext} from "react"
import { ApiConsumer } from "../ApiContext";

const JurosTotalView = props => {
  const apiData = useContext(ApiConsumer);
  return (
    <div class="dash-view">
    <h2 class="view-heading">Juros mensal</h2>
    <div class="dash-card">
      <div id="stats-container">
        <div>
          <h5 class="lg-nmbr">{apiData.monthlyInterest}%</h5>
          <p>ao mês</p>
          </div>
          </div>
        </div>
      </div>
  )
}

export default JurosTotalView
