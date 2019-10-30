import React from 'react'
import EmprestimoTotalCardContent from './EmprestimoTotalCardContent'

class EmprestimoTotal extends React.Component {
	render() {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Valor total emprestado</h2>
				<EmprestimoTotalCardContent />
			</div>
		);
	}
}

export default EmprestimoTotal