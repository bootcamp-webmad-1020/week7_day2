import React, { Component } from 'react'

import { drinks as drinksFromFakeApi } from './../../fakeApi'

class Drinks extends Component {

    constructor() {
        super()
        this.state = {
            drinks: drinksFromFakeApi
        }
    }


    render() {
        return (
            <section>
                <h1>Listado curtre de bebidas</h1>
                <ul>
                    {this.state.drinks.map((elm, idx) => <li key={idx}>{elm}</li>)}
                </ul>
            </section>
        )
    }
}

export default Drinks