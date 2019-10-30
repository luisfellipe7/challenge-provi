import React, { useState, useEffect } from "react";
import '../App.css';
import DashboardCard from './DashboardCard'

const Overview = () => {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Aqui está um resumo do seu empréstimo</h2>
				<DashboardCard />
			</div>
		);
}




export default Overview