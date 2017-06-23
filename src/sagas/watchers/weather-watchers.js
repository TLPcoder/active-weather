'use strict';
import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/action-types';
import {getWeather} from '../task/weather-task';

export default function* weatherWatcher(){
    yield takeEvery(types.LOCATION_DATA, getWeather);
}
