'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Markers from './markers';
import {setCurrentPlace} from '../actions/hiking-actions';
import * as weatherActions from '../actions/weather-actions';

const PlaceMap = props => {
    var center = {
        lat: props.map.markers[0].lat,
        lng: props.map.markers[0].lon
    };

    function getWeather(lat,lng,event, data){
        props.getWeather(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d3eec30cd08de88ceeb2634447793b6/${lat},${lng}`);
        props.setCurrentPlace(data);
    }

    var mapMarkers = props.map.markers.map(el => {
        return (
            <div lat={el.lat} lng={el.lon} element={el} className='marker' onClick={(e)=>getWeather(el.lat,el.lon,e, el )}><p>{el.name}</p></div>
        )
    });
    return (
        <div id='map'>
            <GoogleMapReact defaultCenter={center} defaultZoom={14}>
                {mapMarkers}
            </GoogleMapReact>
        </div>
    );
}

export default connect(({map,weather,hiking}) => ({map,weather,hiking}),{...weatherActions,setCurrentPlace})(PlaceMap)
