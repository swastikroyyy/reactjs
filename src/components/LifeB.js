import React, { Component } from 'react'

class LifeB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "swastik"
        }
        console.log('LifeB construtor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeB getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
        console.log('LifeB componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('LifeB shouldComponentUpdate');
        return true

    }
    getSnapshotBeforeUpdate() {
        console.log('LifeB getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('LifeB componentDidUpdate');
    }

    render() {
        console.log('LifeB render')
        return (
            <div>
                LifeB

            </div>
        )
    }
}

export default LifeB
