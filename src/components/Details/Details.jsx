import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';

class Details extends Component {
    componentDidMount() {
       
    }

   

    
    render() {
        
        return (
           <>
           <h1>Details page</h1>
           
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