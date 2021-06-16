import React, { Component } from 'react'

class Cbind extends Component {
    constructor(props) {
        super(props);

        this.state = {

            course: "MCA",
            rol: this.props.rol
        }
        //this.changeGa = this.changeGa.bind(this)
    }
    /*changeGa() {
        this.setState({
            course: "BCA",

        })
        console.log("hety", this);
    }*/
    changeGa = () => {
        this.setState({
            course: "BCA",

        })
        console.log("hety", this.state.course, this.props.rol);

    }

    render() {
        return (
            <div>
                <button onClick={this.changeGa}>HIT</button>
                {this.state.course}
                {this.props.rol}

            </div>
        )
    }
}

export default Cbind
