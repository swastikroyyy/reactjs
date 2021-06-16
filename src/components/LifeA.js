import React, { Component } from 'react'
import LifeB from './LifeB';

class LifeA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "swastik"
        }
        console.log('LifeA construtor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeA getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
        console.log('LifeA componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('LifeA shouldComponentUpdate');
        return true

    }
    getSnapshotBeforeUpdate() {
        console.log('LifeA getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('LifeA componentDidUpdate');
    }
    changeState = () => {
        this.setState({
            name: 'guddu'
        })
    }

    render() {
        console.log('LifeA render')
        return (
            <div>
                <div>LifeA</div>
                <button onClick={this.changeState}>change state</button>
                <LifeB />
            </div >
        )
    }
}

export default LifeA
