import React from 'react'
import ParcelasEmprestimoCardContent from './ParcelasEmprestimoCardContent'

class ParcelasEmprestimo extends React.Component {
	render() {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Total de parcelas do emprestimo</h2>
				<ParcelasEmprestimoCardContent />
			</div>
		);
	}
}

export default ParcelasEmprestimo