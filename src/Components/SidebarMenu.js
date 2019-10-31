import React from "react"

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overview: "active-item",
      emprestimototal: "inactive-item",
      jurostotal: "inactive-item",
      totalpago: "inactive-item",
      parcelasemprestimo: "inactive-item"
    }
    this.setBtnAndView = this.setBtnAndView.bind(this)
  }

  setBtnAndView(view) {
    this.props.setView(view)
    if (view === "overview") {
      this.setState({
        overview: "active-item",
        emprestimototal: "inactive-item",
        jurostotal: "inactive-item",
        totalpago: "inactive-item",
        parcelasemprestimo: "inactive-item"
      })
    } else if (view === "emprestimototal") {
      this.setState({
        overview: "inactive-item",
        emprestimototal: "active-item",
        jurostotal: "inactive-item",
        totalpago: "inactive-item",
        parcelasemprestimo: "inactive-item"
      })
    } else if (view === "jurostotal") {
      this.setState({
        overview: "inactive-item",
        emprestimototal: "inactive-item",
        jurostotal: "active-item",
        totalpago: "inactive-item",
        parcelasemprestimo: "inactive-item"
      })
    } else if (view === "totalpago") {
      this.setState({
        overview: "inactive-item",
        emprestimototal: "inactive-item",
        jurostotal: "inactive-item",
        totalpago: "active-item",
        parcelasemprestimo: "inactive-item"
      })
    } else if (view === "parcelasemprestimo") {
      this.setState({
        overview: "inactive-item",
        emprestimototal: "inactive-item",
        jurostotal: "inactive-item",
        totalpago: "inactive-item",
        parcelasemprestimo: "active-item"
      })
    }
  }
  render() {
    return (
      <div class="menu-items">
        <a
          class={this.state.overview}
          href="#"
          onClick={() => this.setBtnAndView("overview")}
        >
          {this.props.item1}
        </a>
        <a
          class={this.state.emprestimototal}
          href="#"
          onClick={() => this.setBtnAndView("emprestimototal")}
        >
          {this.props.item2}
        </a>
        <a
          class={this.state.jurostotal}
          href="#"
          onClick={() => this.setBtnAndView("jurostotal")}
        >
          {this.props.item3}
        </a>
        <a
          class={this.state.totalpago}
          href="#"
          onClick={() => this.setBtnAndView("totalpago")}
        >
          {this.props.item4}
        </a>
        <a
          class={this.state.parcelasemprestimo}
          href="#"
          onClick={() => this.setBtnAndView("parcelasemprestimo")}
        >
          {this.props.item5}
        </a>
      </div>
    )
  }
}

export default SidebarMenu
