import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Edit extends Component {
    state = {
        title: this.props.reduxStore.specificMovie.title,
        description: this.props.reduxStore.specificMovie.description
    }

    render() {
        return (
            <>
                <div>
                    <input placeholder="title" value={this.state.title} onChange={this.edit} />
                    <input placeholder="description" value={this.state.description} />
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