import React, { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import EmprestimoTotalView from "./EmprestimoTotalView";
import JurosTotalView from "./JurosTotalView";
import TotalPagoView from "./TotalPagoView";
import ParcelasEmprestimo from "./ParcelasEmprestimoView";
import "../App.css";
import { ApiConsumer } from "../ApiContext";

const Dashboard = props => {
  const [view, setView] = useState("overview");
  const bb = useContext(ApiConsumer);
  console.log("dashboard context --", bb);

  return (
    <div id="dashboard">
      <Sidebar setView={setView} />
      {view === "overview" && <Overview />}
      {view === "emprestimototal" && <EmprestimoTotalView />}
      {view === "jurostotal" && <JurosTotalView />}
      {view === "totalpago" && <TotalPagoView />}
      {view === "parcelasemprestimo" && <ParcelasEmprestimo />}
    </div>
  );
};

export default Dashboard;
