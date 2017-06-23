'use strict';
import * as types from '../actions/action-types';

var initialState = {
    loadMap:false,
    markers: [],
};

export default (state=initialState, action)=>{
    console.log('actions',action);
    switch(action.type){
        case types.LOAD_MAP:
            return {...state, loadMap:action.payload}
        case types.MARKERS:
            return {...state, markers:action.payload}
        default:
            return state;
    }
};
