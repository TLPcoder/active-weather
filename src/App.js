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
import GoogleMap from 'google-map-react';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.weather.showWeather) {
            return (
                <div className="App">
                    <div id="background"></div>
                    <h1 id='title'>Active Weather</h1>
                    <Search className='searchBar'/>
                    <div className='map-and-Info'>
                        <PlaceInfo/>
                        <PlaceMap id='map'/>
                    </div>
                    <div id='hr'></div>
                    <Weather/>
                </div>
            )
        } else if (this.props.map.loadMap && this.props.map.markers.length > 0) {
            return (
                <div className="App">
                    <div id="background"></div>
                    <h1 id='title'>Active Weather</h1>
                    <Search className='searchBar'/>
                    <div>
                        <PlaceMap id='center'/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="App">
                    <div id="background"></div>
                    <h1 id='title'>Active Weather</h1>
                    <Search className='searchBar'/>
                    <div>
                        <div className='center-map'>
                            <GoogleMap defaultCenter={{
                                lat: 38.75408327579141,
                                lng: -99.84375
                            }} defaultZoom={0} bootstrapURLKeys={{
                                key: 'AIzaSyAfWUMLZRRUSKDESnVlsdDJ-VMW4kU_U04'
                            }}></GoogleMap>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default connect(({hiking, map, weather}) => ({hiking, map, weather}))(App);
