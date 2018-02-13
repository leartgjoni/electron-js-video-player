import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'halogen/BounceLoader';
import * as actions from '../actions';

const color = '#faebd7';

const style = {
    display: '-webkit-flex flex',
    WebkitFlex: '0 1 auto',
    flex: '0 1 auto',
    WebkitFlexDirection: 'column',
    flexDirection: 'column',
    WebkitFlexGrow: 1,
    flexGrow: 1,
    WebkitFlexShrink: 0,
    flexShrink: 0,
    WebkitFlexBasis: '25%',
    flexBasis: '25%',
    maxWidth: '25%',
    height: '200px',
    WebkitAlignItems: 'center',
    alignItems: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
    paddingTop: 55
};

class Grid extends Component{
    renderPagination() {
        return (
        <div style={{position: 'fixed', bottom:30, width: '80%'}} >
            <div className="col-md-12"  >
                <button className="btn  navigation-button pull-left" disabled={(this.props.page === 1)} onClick={() => { this.props.startFetchingMovies(); this.props.getMovies(this.props.selected_category, this.props.page-1)}}> BACK </button>
                <button className="btn  navigation-button pull-right" disabled={(this.props.page === this.props.maxPage)} onClick={() => { this.props.startFetchingMovies(); this.props.getMovies(this.props.selected_category, this.props.page+1)}}> FORWARD </button>
            </div>
        </div>
        )
    }

    renderMovieItem(item, i) {
        return (
            <div key={i} className="col-md-3">
                <div className="movie-item">
                    <img key={i} width="100" height="180" src={`${this.props.FOLDER_PATH}/image/${item}`} onClick={() => this.props.selectMovie(`${this.props.FOLDER_PATH}/video/${item.replace('jpg','mp4')}`)} />
                    <br/>
                    <span className="movie-title">{item.replace('.jpg', '')}</span>
                </div>
            </div>
        )
    }
    renderMovies() {
        if(this.props.loading)
            return (
                <div className="col-md-2 col-md-offset-5">
                    <div style={style}><Loader  color={color} size="60px" margin="20px"/></div>
                </div>
            );
        else if(!this.props.movies && !this.props.selected_category)
            return <h1 className="select-category-title">Select a Category</h1>;
        else if(!this.props.movies)
            return <h1 className="no-movies-message">No movies</h1>
        return (
            <div className="row" style={{ margin: 0 }}>
                <div className="col-md-12">
                    {this.props.movies.map((item, i) => this.renderMovieItem(item, i))}
                </div>
                <div>
                    {this.renderPagination()}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderMovies()}
            </div>
        );
    }
}

function  mapStateToProps({ category, movie }) {
    const { selected_category } = category;
    const { loading, movies, page, maxPage, FOLDER_PATH} = movie;
    return {selected_category, loading, movies, page, maxPage, FOLDER_PATH};
}

export default connect(mapStateToProps, actions)(Grid);
