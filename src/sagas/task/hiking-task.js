'use strict';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/action-types';

export function * getHikingTrails({payload}) {
    const config = {
        method: 'GET',
        url: payload,
        headers: {
            'X-Mashape-Key': '9HTlSrFenymshYBxFWIEpowIkFEEp1ra7sPjsncfE8URMnnJcK'
        }
    };
    try {
        const data = yield call(axios, config);

        yield put({type: types.LOAD_MAP, payload: false});
        yield put({type:types.SHOW_WEATHER, payload:false});
        yield put({type: types.GET_HIKING_TRAILS_SUCCESS, payload: data.data.places});

        yield put({type: types.MARKERS, payload: data.data.places});
        yield put({type: types.LOAD_MAP, payload: true});

    } catch (err) {
        yield put({type: types.GET_HIKING_TRAILS_FAIL, err});
    }
}
