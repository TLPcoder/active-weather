'use strict';
import React from 'react';
import {connect} from 'react-redux';
import Marker from './create-marker';

const Markers = props =>{
    function mapMarkers(){
        return props.map.markers.map(el => {
            return <Marker lat={el.lat} lng={el.lon} element={el} className='marker'/>
        })
    }
    return (
        <div>{mapMarkers()}</div>
    )
}

export default connect(({map})=>({map}))(Markers);
