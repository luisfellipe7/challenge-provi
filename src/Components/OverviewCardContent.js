import React, { useState, useEffect } from "react";
import Overview from './Overview'

const OverviewCardContent = () => {
	const [hasError, setErrors] = useState(false);
	const [overviewtotal, setoverviewtotal] = useState({});
  
	async function fetchData() {
	  const res = await fetch("http://www.mocky.io/v2/5c923b0932000029056bce39/");
	  res
		.json()
		.then(res => setoverviewtotal(res))
		.catch(err => setErrors(err));
	}
  
	useEffect(() => {
	  fetchData();
	});
	return(
	<div>
		<h4 class="card-heading">Seu resumo mensal</h4>
 		<div id="stats-container">
		<div>
			<h5 class="lg-nmbr">{overviewtotal.totalAmountInTaxes}</h5>
			<p>Juros esse mês</p>
		</div>
			<div>
			<h5 class="lg-nmbr">{overviewtotal.amountPayd}</h5>
			<p>Total pago esse mês</p>
		</div>
				<div>
			<h5 class="lg-nmbr">{overviewtotal.amountTaken}</h5>
			<p>Total da dívida</p>
		</div>
					<div>
			<h5 class="lg-nmbr">{overviewtotal.monthlyInterest}%</h5>
			<p>% mensal de juros</p>
		</div>
		</div>
	</div>
	)
}

export default OverviewCardContent