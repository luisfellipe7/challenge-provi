import React, { useState, useEffect } from "react"
import "./App.css"
import Dashboard from "./Components/Dashboard"


const App = props => {
  const [hasErrors,setErrors] = useState(false)
  const [emprestimo,setEmprestimo] = useState({})
  
  async function fetchData() {
    const res = await fetch("http://www.mocky.io/v2/5c923b0932000029056bce39/totalAmountInTaxes")
    res
      .json()
      .then(res => setEmprestimo(res))
      .catch(err => setErrors(err))
  }
  useEffect(() => {
    fetchData()
  },[true])

  const EmprestimoContext = React.createContext()

 

  return (
    <EmprestimoContext.Provider value={emprestimo}>
      <Dashboard />
      </EmprestimoContext.Provider> 
    )
}

export default App
