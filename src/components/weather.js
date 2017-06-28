'use strict';
import React from 'react';
import {connect} from 'react-redux';
import C3Chart from 'react-c3js';
import {Line} from 'react-chartjs';
import 'c3/c3.css';

const Weather = props => {
    var fiveDayForcast = props.weather.locationData.daily.data.map((el) => {
        return el.temperatureMax;
    });

    var fiveDayForcastDate = props.weather.locationData.daily.data.map((el) => {
        var date = new Date(parseInt(el.time, 10) * 1000);
        return date.toLocaleString().split(',')[0];
    });

    var weatherData = {
        labels: fiveDayForcastDate.slice(0, 5),
        datasets: [
            {
                label: 'Temperature',
                data: fiveDayForcast.slice(0, 5),
                fillColor: 'rgba(255,255,255,0)',
                strokeColor: "#ffa500",
                highlightFill: "#ffa500",
                highlightStroke: "#ffa500",
                borderWidth: 10
            }
        ]
    };

    return (
        <div id='graph'>
            <Line data={weatherData} width="600" height='250'/>
        </div>
    )

}

export default connect(({weather}) => ({weather}))(Weather);
