'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import GoogleMap from 'google-map-react';
import {setCurrentPlace} from '../actions/hiking-actions';
import * as weatherActions from '../actions/weather-actions';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const PlaceMap = props => {
    console.log(props, props.map.markers)
    var center = {
        lat: props.map.markers[0].lat,
        lng: props.map.markers[0].lon
    };

    function getWeather(lat, lng, event, data) {
        props.getWeather(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9d3eec30cd08de88ceeb2634447793b6/${lat},${lng}`);
        props.setCurrentPlace(data);
    }
    var key = 0;
    var mapMarkers = props.map.markers.map(el => {
        key++
        return (
            <Marker key={key} {...el}  onRightClick={() => (e) => getWeather(el.lat, el.lon, e, el)}/>
        )
    });
    const Map = withGoogleMap(props => (

        <GoogleMap defaultZoom={12} defaultCenter={center}>
            {mapMarkers}
        </GoogleMap>
    ));
    if (props.weather.showWeather) {
        return (
            <div className='map'><Map containerElement={< div style = {{ height: `100%` }}/>} markers={mapMarkers} mapElement={< div style = {{ height: `100%` }}/>}/></div>
        )
    } else if (props.map.loadMap && props.map.markers.length > 0) {
        return (
            <div className='center-map'><Map containerElement={< div style = {{ height: `100%` }}/>} markers={mapMarkers} mapElement={< div style = {{ height: `100%` }}/>}/></div>
        )
    }
}

export default connect(({map, weather, hiking}) => ({map, weather, hiking}), {
    ...weatherActions,
    setCurrentPlace
})(PlaceMap)

{/* <GoogleMap defaultCenter={center} defaultZoom={12} bootstrapURLKeys={{
    key: 'AIzaSyAfWUMLZRRUSKDESnVlsdDJ-VMW4kU_U04'
}}>
    {mapMarkers}
</GoogleMap> */
}

{/* <div lat={el.lat} lng={el.lon} element={el} className='marker' onClick={(e) => getWeather(el.lat, el.lon, e, el)}>
    <Marker {...el}/>
</div> */
}
