import React, { Component } from 'react'

class Cprops extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                <h4>{this.props.msg}</h4>
                {this.props.children}

            </div>
        )
    }
}

export default Cprops
