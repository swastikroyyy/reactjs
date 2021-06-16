import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: ''

        }
    }
    uchange = (event) => {
        this.setState({
            userName: event.target.value
        })

    }
    cchange = (event) => {
        this.setState({
            comments: event.target.value
        })

    }
    tchange = (event) => {
        this.setState({
            topic: event.target.value
        })

    }
    hsubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()

    }



    render() {
        return (
            <form onSubmit={this.hsubmit}>
                <div>

                    <label>userName</label>
                    <input type="text" value={this.state.userName} onChange={this.uchange} />
                </div>

                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.cchange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.tchange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button>submit</button>
            </form>
        )
    }
}

export default Form1
