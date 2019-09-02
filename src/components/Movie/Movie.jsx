import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Movie extends Component {
    seeDetails = (event) => {
        //capture the id of the specific movie and push to the details page
        let id = this.props.movie.id;
        this.props.history.push(`/Details/${id}`);
        
    }


    render(){
        return(
            <div >
                {/* show posters on dom */}
                <img src={this.props.movie.poster} 
                alt={this.props.movie.title}
                onClick={this.seeDetails}
                ></img>
                {/* show the title of the movies */}
                <h1>{this.props.movie.title}</h1>
                {/* show the descriptions on dom */}
                <p>{this.props.movie.description}</p>
            </div>
        )
    }
}

export default withRouter(connect()(Movie);