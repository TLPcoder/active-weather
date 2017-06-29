'use strict';
import * as types from '../actions/action-types';
var initialState = {
    places:null,
    current: null
};

export default (state = initialState, action)=>{
    console.log('payload', action.payload);
    switch(action.type){
        case types.GET_HIKING_TRAILS_SUCCESS:
            return {...state, places:action.payload};
        case types.GET_HIKING_TRAILS_FAIL:
            return {...state};
        case types.SET_CURRENT_PLACE:
            return {...state, current:action.payload};
        default:
            return state;
    }
};
