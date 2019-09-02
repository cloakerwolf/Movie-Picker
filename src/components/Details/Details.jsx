import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Details extends Component {
    componentDidMount() {
       this.fetchMovieWithGenre();
    }

    fetchMovieWithGenre = () => {
        let id = this.props.match.params.id;
        this.props.dispatch({
            type: 'FETCH_SPECIFIC_MOVIE',
            payload: id
        });
    }

   

    
    render() {
        
        
        return (
           <>
            <div>
                <Button variant="contained" color="secondary" onClick={() => { this.props.history.push('/') }} className="btn btn-secondary btn-lg checkoutBtn">Back to list</Button>
                <Button variant="contained" color="primary" onClick={() => this.props.history.push(`/Edit/${this.props.match.params.id}`)} className="btn btn-secondary btn-lg checkoutBtn">Edit</Button>
            </div>
           {/* {JSON.stringify(this.props.reduxStore.specificMovie)} */}
           <img
           src={this.props.reduxStore.specificMovie.poster}
           alt={this.props.reduxStore.specificMovie.title}
           ></img>
           <h1>{this.props.reduxStore.specificMovie.title}</h1>
           <p>{this.props.reduxStore.specificMovie.genres}</p>
           <p>{this.props.reduxStore.specificMovie.description}</p>
           
           
           </>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Details);