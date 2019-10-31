import React from "react";
import '../App.css'
import EmprestimoProvider from '../Context/EmprestimoContext'

const Overview = () => {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Aqui está um resumo do seu empréstimo</h2>
				<div>
		<h4 class="card-heading">Seu resumo mensal</h4>
 		<div id="stats-container">
		<div>
			<h5 class="lg-nmbr">{EmprestimoProvider.totalAmountInTaxes}</h5>
			<p>Juros esse mês</p>
		</div>
			<div>
			<h5 class="lg-nmbr">{EmprestimoProvider.amountPayd}</h5>
			<p>Total pago esse mês</p>
		</div>
				<div>
			<h5 class="lg-nmbr">{EmprestimoProvider.amountTaken}</h5>
			<p>Total da dívida</p>
		</div>
					<div>
			<h5 class="lg-nmbr">{EmprestimoProvider.monthlyInterest}%</h5>
			<p>% mensal de juros</p>
		</div>
		</div>
	</div>
			</div>
		);
}




export default Overview