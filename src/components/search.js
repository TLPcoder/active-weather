'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as hikingTrails from '../actions/hiking-actions';

const Search = props => {
    var location;
    function getPlaces() {
        props.getHikingTrails(`https://trailapi-trailapi.p.mashape.com/?q[city_cont]=${location.value.split(' ').join('+')}`);
    }
    return (
        <div id='search'>
            <input type="text" placeholder='City' ref={i => {
                location = i
            }}/>
            <button className='button' type="button" onClick={getPlaces}>Search</button>
        </div>
    )
}

export default connect(({hiking}) => ({hiking}), {
    ...hikingTrails
})(Search);
