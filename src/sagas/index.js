'use strict';
import {fork} from 'redux-saga/effects';
import hikingWatchers from './watchers/hiking-watchers';
import weatherWatcher from './watchers/weather-watchers';

export default function* startForman(){
    yield fork(hikingWatchers);
    yield fork(weatherWatcher);
}
