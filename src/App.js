'use strict';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import axios from 'axios';
import Search from './components/search';
import PlaceMap from './components/map';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.map.loadMap && this.props.map.markers.length > 0){
            return (
                <div className="App">
                    <Search/>
                    <PlaceMap/>
                </div>
            )
        }
        return (
            <div className="App">
                <Search/>
            </div>
        );
    }
}

export default connect(({hiking,map}) => ({hiking,map}))(App);
