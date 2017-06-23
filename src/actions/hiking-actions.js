'use strict';
import * as types from './action-types';

export const getHikingTrails = (payload) => {
    return {type: types.GET_HIKING_TRAILS, payload};
};
