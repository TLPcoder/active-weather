'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import C3Chart from 'react-c3js';
import {Line} from 'react-chartjs';
import 'c3/c3.css';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 600,
            height: 250,
            windowSize: null
        };
        this.fiveDayForcast = this.props.weather.locationData.daily.data.map((el) => {
            return el.temperatureMax;
        });
        this.fiveDayForcastDate = this.props.weather.locationData.daily.data.map((el) => {
            var date = new Date(parseInt(el.time, 10) * 1000);
            return date.toLocaleString().split(',')[0];
        });
        this.weatherData = {
            labels: this.fiveDayForcastDate.slice(0, 5),
            datasets: [
                {
                    label: 'Temperature',
                    data: this.fiveDayForcast.slice(0, 5),
                    fillColor: 'rgba(255,255,255,0)',
                    strokeColor: "#ffa500",
                    highlightFill: "#ffa500",
                    highlightStroke: "#ffa500",
                    borderWidth: 10
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <div id='graph'>
                    <Line data={this.weatherData} width={400} height={300}/>
                </div>
            </div>
        )
    }
}

export default connect(({weather}) => ({weather}))(Weather);
