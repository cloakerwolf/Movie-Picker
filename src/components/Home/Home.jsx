import React, { Component } from 'react';
import { connect } from 'react-redux';
//component for Movie used by the map
import Movie from "../Movie/Movie";
//material-ui
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




class Home extends Component {




    componentDidMount() {
        this.getMovies();
    }

    //get all movies
    getMovies = () => {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    //open the Details page for specific id
    seeDetails = (id) => {
        //capture the id of the specific movie and push to the details page
        console.log('clicked pic', id);
        this.props.history.push(`/Details/${id}`);

    }



    render() {
        //loop through movies 
        let movies = this.props.reduxStore.movies.map((movie) => {
            return (
                <GridListTile key={movie.id} cols={1} row={1}>
                    <Movie movie={movie} seeDetails={this.seeDetails} key={movie.id} />
                </GridListTile>
            )
        })
        //material-ui
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <GridList
                    cols={2}
                    cellHeight={700}
                    spacing={20}
                    className={classes.gridList}
                >
                    {movies}
                </GridList>
            </div>
        );
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Home));