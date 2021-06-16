import React, { Component } from 'react'
import Chcom from './Chcom'

class Pcom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parent: "parent"
        }

    }
    greetp = (chil) => {
        alert(`hello ${this.state.parent} from ${chil}`)
    }


    render() {
        return (
            <>
                <Chcom grt={this.greetp} />


            </>
        )
    }
}

export default Pcom
