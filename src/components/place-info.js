'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PlaceInfo extends Component {
    constructor(props) {
        super(props);
        this.place = props.hiking.current;
        this.activities = this.place.activities.map(el => {
            return el.activity_type_name;
        });
        this.state = {
            description: '...'
        };
    }
    showDescription = () => {
        this.state.description === '...'
            ? this.setState({description: this.place.description})
            : this.setState({description: '...'});
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>City</th>
                            <tr>{this.place.city}</tr>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <tr>{this.place.name}</tr>
                        </tr>
                        <tr>
                            <th>Temp</th>
                        <tr>{this.props.weather.locationData.currently.temperature}</tr>
                        </tr>
                        <tr onClick={this.showDescription}>
                            <th>Description</th>
                            <tr>{this.state.description}</tr>
                        </tr>
                        <tr>
                            <th>Activities</th>
                            <tr>{this.activities.join(', ')}</tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(({weather, hiking}) => ({weather, hiking}))(PlaceInfo)
