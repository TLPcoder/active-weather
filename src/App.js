'use strict';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import axios from 'axios';
import Search from './components/search';
import PlaceMap from './components/map';
import Weather from './components/weather';
import PlaceInfo from './components/place-info';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.weather.showWeather) {
            return (
                <div>
                    <div id="background"></div>
                    <Search className='searchBar'/>
                    <div className='map-and-Info'>
                        <PlaceInfo/>
                        <PlaceMap  id='map'/>
                    </div>
                    <div id='hr'><hr/></div>
                    <Weather/>
                </div>
            )
        } else if (this.props.map.loadMap && this.props.map.markers.length > 0) {
            return (
                <div className="App">
                    <div id="background"></div>
                    <Search className='searchBar'/>
                    <div>
                        <PlaceMap id='center'/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="App columns">
                    <div id="background"></div>
                    <Search className='searchBar'/>
                </div>
            );
        }
    }
}

export default connect(({hiking, map, weather}) => ({hiking, map, weather}))(App);
