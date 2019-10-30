import React from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview'
import EmprestimoTotalView from './EmprestimoTotalView'
import JurosTotalView from './JurosTotalView'
import TotalPagoView from './TotalPagoView'
import ParcelasEmprestimo from './ParcelasEmprestimoView'

var currentView = "overview";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view: "overview"
		};
		this.setView = this.setView.bind(this);
	}

	setView(view) {
		this.setState({ view: view });
		currentView = view;
		console.log(view);
	}

	render() {
		switch(this.state.view) {
			case "overview":
				return (
				<div id="dashboard">
					<Sidebar setView={this.setView} />
					<Overview />
				</div>
			);
			case "emprestimototal":
			return (
				<div id="dashboard">
					<Sidebar setView={this.setView} />
					<EmprestimoTotalView />
				</div>
			);
			case "jurostotal":
			return (
				<div id="dashboard">
					<Sidebar setView={this.setView} />
					<JurosTotalView />
				</div>
			);
		case "totalpago":
			return (
				<div id="dashboard">
					<Sidebar setView={this.setView} />
					<TotalPagoView />
				</div>
			);
			case "parcelasemprestimo":
				return (
					<div id="dashboard">
						<Sidebar setView={this.setView} />
						<ParcelasEmprestimo />
					</div>
				);
		}
	}
}

export default Dashboard