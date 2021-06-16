import React, { Component } from 'react'

class Cclick extends Component {
  changeG = () => {
    console.log("hello");
  }
  render() {
    return (
      <div>
        <button onClick={this.changeG}>clickHere</button>

      </div>
    )
  }
}

export default Cclick;
