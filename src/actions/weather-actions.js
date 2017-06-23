'use strict';
import * as types from './action-types';

export const getWeather = payload => {
    return {type: types.LOCATION_DATA, payload};
};

export const showWeather = payload => {
    return {type: types.SHOW_WEATHER, payload};
};
