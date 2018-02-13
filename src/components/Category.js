import React, { Component } from 'react';
import Loader from 'halogen/BounceLoader';
import { connect } from 'react-redux';
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
    paddingTop: 30,
    paddingLeft:15
};

class Category extends Component{
    componentWillMount(){
        this.props.startFetchingCategories();
        this.props.getCategories()
    }

    renderCategories(){
        if(this.props.loading)
            return (
                <div className="col-md-10 col-md-offset-1">
                    <div style={style}><Loader color={color} size="30px" margin="4px"/></div>
                </div>
            );

        return (
            <div>
                <div className="col-md-12">
                    <h2 className="categories-head-title">Categories</h2>
                    <hr style={{borderTop: '1px solid #968d81'}}/>
                </div>
                {this.props.categories.map((item, i) => {
                     return(
                         <div className="col-md-12">
                            <div className="categories-item"
                                style={{ color: (this.props.selected_category === i) ? '#331a00' : '#faebd7' }}
                                onClick={() => { this.props.selectCategory(i); this.props.startFetchingMovies(); this.props.getMovies(i, 1)}}
                                key={i}>{item}
                            </div>
                         </div>
                     );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderCategories()}
            </div>
        );
    }
}

function  mapStateToProps({ category }) {
    return category;
}

export default connect(mapStateToProps, actions)(Category);
