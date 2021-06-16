import React, { Component } from 'react'

class Cren extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {
        return (
            this.state.isLoggedin ? <div> happy new year</div> : <div> happy</div>

        )
    }


}

export default Cren
