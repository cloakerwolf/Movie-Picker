import React, { Component } from 'react';
import { connect } from 'react-redux';
//component for Movie used by the map
import Movie from "../Movie/Movie";



class Home extends Component {
    componentDidMount() {
       this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }





    render() {
        let movies = this.props.reduxStore.movies.map((movie) => {
            return(
               
                <Movie key={movie.id} movie={movie} />
             
            )
        })

        return (
            <>
            {movies}
            </>
        );
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Home);