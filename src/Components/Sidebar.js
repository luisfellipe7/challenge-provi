import React from 'react'
import SidebarMenu from './SidebarMenu'
import UserProfileView from './UserProfileView'

var username = "Luis Fellipe";
var usertitle = "Cliente";

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}
	setView(view) {
		this.props.setView(view);
		console.log("level 2 " + view);
	}
	render() {
		return (
			<div class="sidebar-menu">
				<UserProfileView username={username} usertitle={usertitle} />
				<SidebarMenu
					item1={"Overview"}
					item2={"Empréstimo Total"}
					item3={"Juros Total"}
					item4={"Total Pago"}
					item5={"Todas parcelas do emprestimo"}
					item6={"Taxa de juros mensal"}
					setView={this.props.setView}
				/>
				<div>
					<button id="sign-out-btn" class="full-btn">
						Sign Out
					</button>
				</div>
			</div>
		);
	}
}

export default Sidebar