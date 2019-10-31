import React from 'react'
import App from '../App'

class ParcelasEmprestimo extends React.Component {
	render() {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Total de parcelas do emprestimo</h2>
				<div class="dash-card">
      <div id="stats-container">
      <h5 class="lg-nmbr">{App.amountTaken}</h5>
      </div>
    </div>
			</div>
		);
	}
}

export default ParcelasEmprestimo