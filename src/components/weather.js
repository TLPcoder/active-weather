'use strict';
import React from 'react';
import {connect} from 'react-redux';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const Weather = props => {
    var fiveDayForcast = props.weather.locationData.daily.data.map((el) => {
        return el.temperatureMax;
    });

    var fiveDayForcastDate = props.weather.locationData.daily.data.map((el) => {
        return new Date(el.time).toUTCString();
    });

    const LineChart = ({data}) => <C3Chart data={{
        json: data
    }}/>
    
    return (
        <div id='linechart'>
            <LineChart data={
                {'Temperature':fiveDayForcast}
            }/>
        </div>
    )
}

export default connect(({weather}) => ({weather}))(Weather)
