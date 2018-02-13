import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Player extends Component{

    render() {


        const videoJsOptions = {
            autoplay: true,
            controls: true,
            //fluid to fill the cointainer
            fluid: true,
            // native control for touch devices
            nativeControlsForTouch: true,

            controlBar: {
                fullscreenToggle: false,
                // volumePanel: {inline: true},
                // children: [
                //     'playToggle',
                //     'volumePanel',
                //     'volumeBar',
                //     'currentTimeDisplay',
                //     'timeDivider',
                //     'durationDisplay',
                //     'progressControl',
                //     'liveDisplay',
                //     'remainingTimeDisplay',
                //     'customControlSpacer',
                //     'playbackRateMenuButton',
                //
                // ]
            },
            // poster: 'movies/action/image/action_one.jpg',
            sources: [{
                src: this.props.selected_movie,
                type: 'video/mp4'
            }]
        };
        return (
            <div style={{height: '100%'}}>
                <div style={{ height: '100%', zIndex: 1, position: 'relative' }}>
                    <VideoPlayer { ...videoJsOptions } />
                </div>
                <div className="movie-close-btn" style={{ zIndex: 9999999999, position: 'absolute', top: 15, right: 15, fill: '#fff' }} onClick={ () => this.props.closeMovie()}>
                    <img src="icons/cancel-circle.svg" style={{fill: '#fff'}} />
                </div>
            </div>

        );
    }

}

function  mapStateToProps({ movie }) {
    return movie;
}

export default connect(mapStateToProps, actions)(Player);
