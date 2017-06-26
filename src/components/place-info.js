'use strict';
import React from 'react';
import {connect} from 'react-redux';

const PlaceInfo = props => {
    console.log('hello there', props);
    var place = props.hiking.current;
    const activities = place.activities.map(el => {
        return (
            <p>{el.activity_type_name}</p>
        );
    })
    return (
        <div>
            <p>{place.city}</p>
            <p>{place.name}</p>
            <p>{place.description}</p>
            <div>{activities}</div>
        </div>
    )
}

export default connect(({weather, hiking}) => ({weather, hiking}))(PlaceInfo)
