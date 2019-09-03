import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Edit extends Component {
    //shows the old state of coming from the db which is later changed when things are editted
    state = {
        title: this.props.reduxStore.specificMovie.title,
        description: this.props.reduxStore.specificMovie.description
    }



    edit = () => {
        //replaces the state with the new imputs
        let editted = {
            id: this.props.reduxStore.specificMovie.id,
            title: this.state.title,
            description: this.state.description
        }
        //send the editted state back to the saga
        console.log(editted);
        this.props.dispatch({
            type: 'EDIT_MOVIE',
            payload: editted
        })
        //sends you back to details for the one you just changed
        this.props.history.push(`/Details/${this.props.match.params.id}`)

    }


    render() {
        return (
            <>
                <div>
                    <input placeholder="title" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                    <br />
                    <textarea
                        rows="20"
                        col="100"
                        name="description"
                        onChange={(event) => this.setState({ description: event.target.value })}
                        placeholder={this.props.reduxStore.specificMovie.description}
                    />
                    {/* started with an input then noticed that textarea was asked for */}
                    {/* <input placeholder="description" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} /> */}
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={() => { this.props.history.push(`/Details/${this.props.match.params.id}`) }} className="btn btn-secondary btn-lg checkoutBtn">Cancel</Button>
                    <Button variant="contained" color="primary" onClick={this.edit} className="btn btn-secondary btn-lg checkoutBtn">Save</Button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Edit);