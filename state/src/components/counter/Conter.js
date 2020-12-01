import React, { Component } from 'react'

import './Counter.css'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            maxValue: 10,
            buttonColor: 'grey'
        }
    }

    handleCounter = () => {
        if (this.state.count < this.state.maxValue) {
            this.setState({
                count: this.state.count + 1
            })
        } else {
            this.setState({
                count: this.state.count + 1,
                buttonColor: 'red'
            })
        }
    }

    render() {
        return (
            <section className="counter">
                <h2>Contador</h2>
                <p>El contador se ha presionado {this.state.count} veces</p>
                <button style={{ background: this.state.buttonColor }} onClick={this.handleCounter}>Aumentar el contador</button>
            </section>
        )
    }
}

export default Counter