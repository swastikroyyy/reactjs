import React, { Component } from 'react';
class Hola extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'holaaaaa'
    }
  }
  sub() {
    this.setState({
      msg: 'heyyyyy'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => { this.sub() }}>sub</button>
      </div>
    )
  }
}
export default Hola;
