'use strict';
import React from 'react';
import {connect} from 'react-redux';
import * as hikingTrails from '../actions/hiking-actions';

const Search = props => {
    var location;
    function getPlaces() {
        console.log(props);
        props.getHikingTrails(`https://trailapi-trailapi.p.mashape.com/?q[city_cont]=${location.value.split(' ').join('+')}`);
    }
    return (
        <div>
            <input type="text" ref={i=>{location=i}}/>
            <input type="button" value="Search" onClick={getPlaces}/>
        </div>
    )
}

export default connect(({hiking}) => ({hiking}), {...hikingTrails})(Search);
