'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMap from 'google-map-react';
import {setCurrentPlace} from '../actions/hiking-actions';
import * as weatherActions from '../actions/weather-actions';

const PlaceMap = props => {
    var center = {
        lat: props.map.markers[0].lat,
        lng: props.map.markers[0].lon
    };

    function getWeather(lat, lng, event, data) {
        props.getWeather(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d3eec30cd08de88ceeb2634447793b6/${lat},${lng}`);
        props.setCurrentPlace(data);
    }

    var mapMarkers = props.map.markers.map(el => {
        return (
            <div lat={el.lat} lng={el.lon} element={el} className='marker' onClick={(e) => getWeather(el.lat, el.lon, e, el)}>
                <p>{el.name}</p>
            </div>
        )
    });
    if (props.weather.showWeather) {
        return (
            <div className='map'>
                <GoogleMap className='main-map' defaultCenter={center} defaultZoom={12}>
                    {mapMarkers}
                </GoogleMap>
            </div>
        )
    } else if (props.map.loadMap && props.map.markers.length > 0) {
        return (
            <div className='center-map'>
                <GoogleMap defaultCenter={center} defaultZoom={12}>
                    {mapMarkers}
                </GoogleMap>
            </div>
        )
    }
}

export default connect(({map, weather, hiking}) => ({map, weather, hiking}), {
    ...weatherActions,
    setCurrentPlace
})(PlaceMap)
