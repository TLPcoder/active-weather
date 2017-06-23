'use strict';
import * as types from '../actions/action-types';

var initialState = {
    showWeather:false,
    locationData: null,
}

export default (state=initialState, action)=>{
    switch(action.type){
        case types.SHOW_WEATHER:
            return {...state, showWeather:action.payload};
        case types.LOCATION_DATA_SUCCESS:
            return {...state, locationData:action.payload.data};
        case types.LOCATION_DATA_FAIL:
            return {...state};
        default:
            return state;
    }
}
