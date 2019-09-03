import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



//material-ui
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 'auto',
        height: 'auto',
    },
});



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
        //loop through the genres on the specific movie
        let genres = this.props.reduxStore.specificMovie.genres.map((genre) => {
            return (
                <GridListTile key={genre} cols={1} row={1}>
                    <div key={genre} >{genre}</div>
                </GridListTile>
            )
        })

        const { classes } = this.props;
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
                {/* <p>{this.props.reduxStore.specificMovie.genres}</p> */}
                {/* this puts it in a list so the words are not running together */}
                <div className={classes.root}>
                    <GridList
                        cols={2}
                        cellHeight={20}
                        spacing={20}
                        className={classes.gridList}
                    >
                        {genres}
                    </GridList>
                </div>

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

export default connect(mapStateToProps)(withStyles(styles)(Details));