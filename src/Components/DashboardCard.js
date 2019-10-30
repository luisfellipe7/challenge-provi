import React from 'react'
import EmprestimoTotalCardContent from './EmprestimoTotalCardContent'
import OverviewCardContent from './OverviewCardContent'
import JurosTotalCardContent from './JurosTotalCardContent'
import TotalPagoCardContent from './TotalPagoCardContent'
import ParcelasEmprestimoCardContent from './ParcelasEmprestimoCardContent'

var currentView = "overview"

class DashboardCard extends React.Component {
	render() {
		switch(currentView) {
			case "overview":
		return( 
		<div class="dash-card"> 
			<OverviewCardContent />
		</div>)
				case "emprestimototal":
		return( 
		<div class="dash-card"> 
			<EmprestimoTotalCardContent />
		</div>)
		case "jurostotal":
		return( 
		<div class="dash-card"> 
			<JurosTotalCardContent />
		</div>)
				case "totalpago":
		return( 
		<div class="dash-card"> 
			<TotalPagoCardContent />
		</div>)
		return(
			<div class="dash-card">
				<ParcelasEmprestimoCardContent />
			</div>
		)
		}
		}
	}

export default DashboardCard