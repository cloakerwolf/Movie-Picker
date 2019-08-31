import React, { Component } from 'react';
import { connect } from 'react-redux';



class Home extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }





    render() {
        let movies = this.props.reduxStore.movies.map((movie) => {
            return(
                <div key={movie.id}>
                    <img src={movie.poster} alt={movie.title}></img>
                    <p>{movie.title}</p>
                    <p>{movie.description}</p>
                </div>
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