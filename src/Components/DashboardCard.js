import React, {useState} from 'react'
import Overview from './Overview'
import EmprestimoTotalView from './EmprestimoTotalView'
import JurosTotalView from './JurosTotalView'
import TotalPagoView from './TotalPagoView'
import ParcelasEmprestimo from './ParcelasEmprestimoView'
import '../App.css';

const DashboardCard = (props) => {
	const [view, setView] = useState('overview')
	return (
		<div id="dashboard">
		{view === "overview" &&  <Overview/>}
		{view === "overview" && <EmprestimoTotalView />}
		{view === "overview" && <JurosTotalView/>}
		{view === "overview" && <TotalPagoView />}
		{view === "overview" && <ParcelasEmprestimo />}
	</div>
		)
	}

export default DashboardCard