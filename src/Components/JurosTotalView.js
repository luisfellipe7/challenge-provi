import React from 'react'
import App from '../App'

const JurosTotalView = (props) => {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Juros total do emprestimo</h2>
    			<div class="dash-card">
      			<div id="stats-container">
	  			<h5 class="lg-nmbr">{App.totalAmountInTaxes}</h5>
	  </div>
    </div>
			</div>
		);
	}


export default JurosTotalView