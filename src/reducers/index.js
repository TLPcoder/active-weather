'use strict';
import {combineReducers} from 'redux';
import hiking from './hiking-reducer';
import map from './map-reducers';
import weather from './weather-reducer';

const rootReducer = combineReducers({
  hiking, map, weather 
});

export default rootReducer;
