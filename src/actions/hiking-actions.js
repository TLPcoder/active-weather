'use strict';
import * as types from './action-types';

export const getHikingTrails = (payload) => {
    return {type: types.GET_HIKING_TRAILS, payload};
};

export const setCurrentPlace = (payload) => {
    return {type: types.SET_CURRENT_PLACE, payload};
};
