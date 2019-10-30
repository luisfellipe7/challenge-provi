import React from 'react'
import TotalPagoCardContent from './TotalPagoCardContent'

class TotalPagoView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Total da divida pago</h2>
				<TotalPagoCardContent />
			</div>
		);
	}
}
export default TotalPagoView