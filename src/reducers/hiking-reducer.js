'use strict';
import * as types from '../actions/action-types';
var initialState = {
    places:null,
    current: null
};

export default (state = initialState, action)=>{
    console.log('actions', action);
    switch(action.type){
        case types.GET_HIKING_TRAILS_SUCCESS:
            return {...state, places:action.payload};
        case types.GET_HIKING_TRAILS_FAIL:
            return {...state};
        default:
            return state;
    }
};
