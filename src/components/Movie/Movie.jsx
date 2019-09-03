import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Movie extends Component {



    render() {
        return (
            <div >
                {/* show posters on dom */}
                <img src={this.props.movie.poster}
                    alt={this.props.movie.title}
                    onClick={() => this.props.seeDetails(this.props.movie.id)}
                ></img>
                {/* show the title of the movies */}
                <h1>{this.props.movie.title}</h1>
                {/* show the descriptions on dom */}
                <p>{this.props.movie.description}</p>
            </div>
        )
    }
}

export default withRouter(connect()(Movie));