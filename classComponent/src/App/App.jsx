import React from "react"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
  }

  add() {
    this.setState({count: this.state.count + 1})
  }

  subtract() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div className="counter">
        <button className="counter--minus" onClick={this.subtract}>–</button>
        <div className="counter--count">
          <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>+</button>
      </div>
    )
  }
}
