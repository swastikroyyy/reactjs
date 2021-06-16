import React, { Component } from 'react'

class Ebind extends Component {
    constructor() {

        super()
        this.state = {
            msga: 'hey'
        }
        //this.clickMe = this.clickMe.bind(this)

    }
    //clickMe() {
    //  this.setState({
    //    msga: 'how r u?'
    //})

    //}
    clickMe = () => {
        this.setState({
            msga: 'how r u?'
        })

    }


    render() {
        return (
            <div>
                <div>{this.state.msga}</div>
                {/*<button onClick={this.clickme.bind(this)}> Click Here</button>*/}
                {/*<button onClick={() => this.clickMe()}> Click Here</button>*/}
                <button onClick={this.clickMe}> Click Here</button>

            </div>
        )
    }
}

export default Ebind
