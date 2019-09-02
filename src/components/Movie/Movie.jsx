import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Movie extends Component {
    seeDetails = (id) => {
        this.props.history.push('/Details');
        // this.props.dispatch({
        //     type: 'FETCH_MOVIE_ID',
        //     payload: id
        // })
    }


    render(){
        return(
            <div >
                <img src={this.props.movie.poster} 
                alt={this.props.movie.title}
                onClick={()=> this.seeDetails(this.props.movie.id)}
                ></img>
                <h1>{this.props.movie.title}</h1>
                <p>{this.props.movie.description}</p>
            </div>
        )
    }
}

export default withRouter(Movie);