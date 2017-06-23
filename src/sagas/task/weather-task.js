'use strict';
import * as types from '../../actions/action-types';
import {call,put} from 'redux-saga/effects';
import axios from 'axios';

export function * getWeather({payload}){
    const config = {
        method:'GET',
        url: payload
    };
    try{
        const data = yield call(axios,config);
        yield put({type:types.LOCATION_DATA_SUCCESS, payload:data});
        yield put({type:types.SHOW_WEATHER, payload:true});
    }catch(err){
        yield put({type:types.LOCATION_DATA_FAIL, payload:err});
    }
}
