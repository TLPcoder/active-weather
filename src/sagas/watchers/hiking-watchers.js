'use strict';
import {takeEvery} from 'redux-saga/effects';
import * as types from '../../actions/action-types';
import {getHikingTrails} from '../task/hiking-task';

export default function* hikingWatchers(){
    yield takeEvery(types.GET_HIKING_TRAILS, getHikingTrails);
}
