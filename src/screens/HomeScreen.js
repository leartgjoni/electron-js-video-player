import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';
import Grid from '../components/Grid';
import Player from '../components/Player';


class HomeScreen extends Component{

    renderComponents() {
        if(this.props.selected_movie)
            return <Player />;
        return (
            <div style={{ height: '100%', paddingTop: 35}}>
                <div className="col-md-2 category-side-bar">
                    <Category />
                </div>
                <div className="col-md-10">
                    <Grid />
                </div>
            </div>
        );
    }

    render() {
        return this.renderComponents();
    }
}

function  mapStateToProps({ movie }) {
    return movie;
}

export default connect(mapStateToProps, null)(HomeScreen);