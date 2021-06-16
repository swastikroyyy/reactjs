import React, { Component } from 'react'

class Addcont extends Component {
    render() {
        return (
            <div>
                <h2> Add Contact</h2>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" placeholder="enter your name"></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" placeholder="enter your password"></input>
                    </div>

                    <button>submit</button>

                </form>

            </div>
        )
    }
}

export default Addcont
