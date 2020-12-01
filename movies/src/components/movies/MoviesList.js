import React, { Component } from 'react'

import { movies as fakeMoviesFromFakeApi } from './../../fakeApi'

import MovieCard from './MovieCard'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: fakeMoviesFromFakeApi,
            showOscarAwarded: true
        }
    }

    removeMovie = movieIdToDelete => {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id != movieIdToDelete)
        })
    }

    toggleOscarMovies = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded })

    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscar === this.state.showOscarAwarded)

        return (

            <section>

                <h2>Listado de películas</h2>

                {filteredMovies.map(elm => <MovieCard key={elm._id} deleteMovie={() => this.removeMovie(elm._id)} title={elm.title} director={elm.director} hasOscar={elm.hasOscar} />)}

                <button onClick={this.toggleOscarMovies}>Ver películas {this.state.showOscarAwarded ? 'sin Oscar' : 'con Oscar'}</button>

            </section>
        )
    }
}

export default MoviesList