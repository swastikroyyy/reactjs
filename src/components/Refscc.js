import React, { Component } from 'react'

class Refscc extends Component {
    constructor(props) {
        super(props)

        this.textInput = React.createRef();
    }
    componentDidMount() {
        console.log(this.textInput);
        this.textInput.current.focus()
    }
    handleClick = () => {
        alert(this.textInput.current.value)
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <button onClick={this.handleClick}>click</button>

            </div>
        )
    }
}

export default Refscc
