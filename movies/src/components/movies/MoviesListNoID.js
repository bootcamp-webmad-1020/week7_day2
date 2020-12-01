import React, { Component } from 'react'

import { movies as fakeMoviesFromFakeApi } from '../../fakeApi'

import MovieCard from './MovieCard'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: fakeMoviesFromFakeApi
        }
    }

    removeMovie = movieIndexToDelete => {

        const moviesCopy = [...this.state.movies]; // copia!
        moviesCopy.splice(movieIndexToDelete, 1)

        this.setState({
            movies: moviesCopy
        })

    }

    render() {
        return (
            <section>
                <h2>Listado de películas</h2>
                {this.state.movies.map((elm, idx) => <MovieCard key={idx} deleteMovie={() => this.removeMovie(idx)} title={elm.title} director={elm.director} />)}
            </section>
        )
    }
}

export default MoviesList